import os
from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status
import schemas
import crud
from database import SessionLocal
import boto3

router = APIRouter(
  prefix="/books"
)

s3 = boto3.client('s3', 
                  aws_access_key_id = os.environ['ACCESS_KEY_ID'],
                  aws_secret_access_key = os.environ['ACCESS_SECRET_KEY']
                  )

S3_BUCKET_NAME='readingjournal-fastapi'

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

@router.post("", status_code=status.HTTP_201_CREATED)
def create_book(book: schemas.BookRequest = Depends(), db: Session = Depends(get_db)):
  # Upload file to AWS S3
  s3.upload_fileobj(book.file.file, S3_BUCKET_NAME, book.file.filename)

  uploaded_file_url = f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{book.file.filename}"
 
  book.image_url = uploaded_file_url
  
  # Store book in database
  book = crud.create_book(db, book)
  return book

@router.get("", response_model=List[schemas.BookResponse])
def get_books(db: Session = Depends(get_db)):
  book = crud.read_books(db)
  return book

@router.get("/{id}")
def get_book_by_id(id: int, db: Session = Depends(get_db)):
  book = crud.read_book(db, id)
  if book is None:
    raise HTTPException(status_code=404, detail="book not found")
  return book

@router.put("/{id}")
def update_book(id: int, book: schemas.BookRequest, db: Session = Depends(get_db)):
  book = crud.update_book(db, id, book)
  if book is None:
    raise HTTPException(status_code=404, detail="book not found")
  return book

@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_book(id: int, db: Session = Depends(get_db)):
  res = crud.delete_book(db, id)
  if res is None:
    raise HTTPException(status_code=404, detail="book not found")
  return res