from typing import Optional

from fastapi import FastAPI

from pydantic import BaseModel


app = FastAPI()



class Item(BaseModel):

    name: str
    price: float
    is_offer: Optional[bool] = None
@app.get("/")
def read_root():
    return {'data': {'name': 'Tam'}}

@app.get("/about")
def about():
    return {'data': 'about page'}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

# this has to be before the blog/id
@app.get('/blog/unpublished')
def unpublished():
    return {'data': 'all unpublished blogs'}

@app.get('/blog/{id}')
def show(id: int):
    return {'data': id}
@app.get('/blog')
def index(limit, published: bool, sort: Optional[str] = None):
    if published:
        return {'data': f'{limit} published blogs from the db'}
    else:
        return {'data': '0 published blogs from the db'}



@app.get('/blog/{id}/comments')
def comments(id, limit=10):
    return {'data': {1,2}}

class Blog(BaseModel):
    title: str
    body: str
    published_at: Optional[bool]


@app.post('/blog')
def create_blog(blog: Blog):
    return {"data": f"blog created with title as {blog.title}"}