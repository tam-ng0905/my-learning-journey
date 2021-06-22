from pydantic import BaseModel

# for pydantic

class Blog(BaseModel):
    title: str
    body: str


class ShowBlog(BaseModel):
    title: str
    body: str
