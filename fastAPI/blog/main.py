from fastapi import FastAPI
from . import schema, models
from database import engine

models.Base.metadata.create_all(engine)

app = FastAPI()


@app.post('/blog')
def create(request: schema.Blog):
    return request