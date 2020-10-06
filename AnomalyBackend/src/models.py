from flask import current_app

from src import db


class Anomaly(db.Model):
    __tablename__="anomaly"
    id_ = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.String(), nullable=False)
    score = db.Column(db.Integer, default=0)
