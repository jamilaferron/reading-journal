from fastapi import Form, UploadFile
from pydantic import BaseModel
from typing import Optional

class BookRequest(BaseModel):
    id: str
    title: Optional[str] = None
    author: Optional[str] = None
    genre: Optional[str] = None
    image_url: str
    rating: Optional[int] = None

class BookResponse(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    genre: Optional[str] = None
    image_url: str
    rating: Optional[int] = None
    id: str

    class Config:
        orm_mode = True