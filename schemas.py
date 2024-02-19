from pydantic import BaseModel

class BookRequest(BaseModel):
    title: str
    author: str
    genre: str
    image: str
    rating: float 

class BookResponse(BaseModel):
    title: str
    author: str
    genre: str
    image: str
    rating: float 
    id: int

    class Config:
        orm_mode = True