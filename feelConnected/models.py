from feelConnected import db, login_manager
from flask_login import UserMixin
import datetime

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    dt_nasc = db.Column(db.DateTime, default='1998-04-29')
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')

    permissoes = db.relationship('Permissao_Usuario', backref='usuario', lazy=True)

    def __repr__(self):
        return f"User('{self.username}, {self.email}, {self.image_file}')'"


class Permissao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True, nullable=False)

    usuarios = db.relationship('Permissao_Usuario', backref="permissao", lazy=True)

    def __repr__(self):
        return f"Permissão('{self.name}')"

class Permissao_Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    permission_id = db.Column(db.Integer, db.ForeignKey('permissao.id'), nullable=False)

    def __repr__(self):
        return f"Permissão_Usuario('{self.user_id}, {self.permission_id}')"

class Contato(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    subject = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    date = db.Column(db.DateTime(False), nullable=False, default=datetime.datetime.utcnow)
    usr_name = db.Column(db.String(200), nullable=False)
    usr_email = db.Column(db.String(200), nullable=False)
    usr_phone = db.Column(db.String(200), nullable=False)
    usr_location_lat = db.Column(db.String(200), nullable=False, default="-23.822758")
    usr_location_long = db.Column(db.String(200), nullable=False, default="-46.582238")

    def __repr__(self):
        return f"Contato('{self.subject}')"