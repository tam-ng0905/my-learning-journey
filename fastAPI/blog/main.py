from fastapi import FastAPI

app = FastAPI()

class Blog():
    title: str
    body: str



@app.post('/blog')
def create(title, body):
    return f'creating {title} and {body}'