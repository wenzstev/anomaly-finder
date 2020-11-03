import random

from src.schemas import AnomalySchema
from src.models import Anomaly
from src.errors import InvalidUsage
from src import db

from marshmallow import ValidationError
from sqlalchemy import func
from sqlalchemy.exc import IntegrityError

anomaly_schema = AnomalySchema()

schemas_to_models = {
    "anomaly": anomaly_schema
}


def get_resource_or_404(resource_type, identifier):
    resource = resource_type.query.get(identifier)
    if not resource:
        raise InvalidUsage("Resource not found", 404)
    return resource


def load_resource_from_schema(resource_type, new_resource_json):
    if not new_resource_json:
        raise InvalidUsage("Data formatted incorrectly.")

    try:
        new_resource = schemas_to_models[resource_type.__tablename__].load(new_resource_json)
        return new_resource
    except ValidationError as e:
        raise InvalidUsage("Data formatted incorrectly.", payload=e)


def post_new_resource(resource_type, new_resource_json):
    new_resource = load_resource_from_schema(resource_type, new_resource_json)

    try:
        db.session.add(new_resource)
        db.session.commit()
        return new_resource
    except IntegrityError as e:
        raise InvalidUsage("You're trying to load something that is already in the database.", payload="IntegrityError")


def get_anomalies_by_params(params):
    if params.get("random"):
        anomalies = db.session.query(Anomaly).order_by(func.random())
        return [anomalies.first()]
    if params.get("ticker"):
        anomalies = db.engine.execute(f'''
            SELECT id_, title 
            FROM anomaly 
            ORDER BY id_ DESC 
            LIMIT {params.get("ticker")}''')
        return anomalies
    if params.get('id'):
        anomalies = db.engine.execute(f'''
            SELECT id_, title
            FROM anomaly
            WHERE id_ IN {tuple(params.get('id').split(','))}''')
        return anomalies

    return db.session.query(Anomaly).all()
