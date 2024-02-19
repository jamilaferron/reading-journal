from fastapi import Form, UploadFile
from pydantic import BaseModel
from typing import Optional

class BookRequest(BaseModel):
    title: str 
    author: str 
    genre: str 
    file: UploadFile 
    image_url: Optional[str] = None
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