from marshmallow import post_load

from src import ma
from src.models import Anomaly


class AnomalySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Anomaly

    @post_load
    def make_anomaly(self, data, **kwargs):
        return Anomaly(**data)
