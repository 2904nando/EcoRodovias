import psycopg2
import os

isHerokuEnv = os.environ.get('IS_HEROKU', None)

if isHerokuEnv:
    try:
        connection = psycopg2.connect(user = os.environ.get('HEROKU_PSQL_USER'),
                                      password = os.environ.get('HEROKU_PSQL_PSWD'),
                                      host = os.environ.get('HEROKU_PSQL_HOST'),
                                      port = os.environ.get('HEROKU_PSQL_PORT'),
                                      database = os.environ.get('HEROKU_PSQL_DB'))

    except:
        print('Erro de conexão com PostgreSQL')
else:
    try:
        import dados_secretos

        try:
            connection = psycopg2.connect(user=dados_secretos.db_user,
                                          password=dados_secretos.db_pswd,
                                          host=dados_secretos.db_host,
                                          port=dados_secretos.db_port,
                                          database=dados_secretos.db_db)

        except:
            print('Erro de conexão com PostgreSQL')

    except:
        print("Falha arquivo dados secretos!")