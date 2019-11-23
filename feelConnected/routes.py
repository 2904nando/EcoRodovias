from flask import render_template, redirect, request, url_for, flash
from feelConnected import app, db, bcrypt
from feelConnected.forms import FormularioRegistro, FormularioLogin
from feelConnected.models import User
from flask_login import login_user, logout_user, login_required, current_user

@app.route("/")
def index():
    return render_template("index.html.j2")

@app.route("/viaturas")
def viaturas():
    return render_template("viaturas.html.j2")

@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = FormularioLogin()
    if form.validate_on_submit():
        user = User.query.filter_by(email = form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            return redirect(url_for('index'))
        else:
            flash(f'Credenciais inválidas!', 'danger')
    return render_template("login.html.j2", form=form)


@app.route("/register", methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = FormularioRegistro()
    if form.validate_on_submit():
        hashed_pw = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username = form.username.data,
                    email = form.email.data,
                    password = hashed_pw)
        db.session.add(user)
        db.session.commit()
        flash(f'Conta criada com sucesso! Faça login para entrar.', 'success')
        return redirect(url_for("login"))
    else:
        print(form.errors)
    return render_template("register.html.j2", form=form)

@login_required
@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route("/rota")
def rota():
    return render_template("rota.html.j2")

@app.route("/contato")
def contato():
    return render_template("contato.html.j2")

@app.route("/contato_usuario")
def contato_usuario():
    return render_template("contato_usuario.html.j2")