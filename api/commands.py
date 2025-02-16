import click
from flask.cli import with_appcontext

from . import db
from .models import Movie

@click.command(name='create_movies')
@with_appcontext
def create_movies():
  db.drop_all()
  db.create_all()