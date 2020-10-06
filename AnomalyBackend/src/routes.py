from flask import Blueprint, jsonify, request
from src import db

from src.utils import post_new_resource, get_resource_or_404, get_anomalies_by_params
from src.models import Anomaly
from src.schemas import AnomalySchema

routes = Blueprint('routes', __name__)

anomaly_schema = AnomalySchema()
anomalies_schema = AnomalySchema(many=True)


@routes.route("/api/anomalies", methods=["GET"])
def get_anomalies():
    anomalies = get_anomalies_by_params(request.args)
    return jsonify(anomalies_schema.dump(anomalies))


@routes.route("/api/anomalies", methods=["POST"])
def post_anomaly():
    new_anomaly = post_new_resource(Anomaly, request.json)
    return jsonify(anomaly_schema.dump(new_anomaly)), 201


@routes.route("/api/anomalies/<int:id_>", methods=["GET"])
def get_specific_anomaly(id_):
    current_anomaly = get_resource_or_404(Anomaly, id_)
    return jsonify(anomaly_schema.dump(current_anomaly))


@routes.route("/api/anomalies/<int:id_>", methods=["PUT"])
def modify_anomaly(id_):
    return jsonify("This feature is coming soon, with the addition of users!"), 501


@routes.route("/api/anomalies/<int:id_>", methods=["DELETE"])
def delete_anomaly(id_):
    return jsonify("This feature is coming soon, with the addition of users!"), 501


@routes.route("/api/anomalies/<int:id_>/vote", methods=["PUT"])
def upvote_anomaly(id_):
    current_anomaly = get_resource_or_404(Anomaly, id_)
    current_anomaly.score += request.json.get("increment")
    db.session.commit()
    return jsonify(anomaly_schema.dump(current_anomaly))


