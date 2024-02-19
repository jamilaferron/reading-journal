from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status
import schemas
import crud
from database import SessionLocal

router = APIRouter(
  prefix="/books"
)

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

@router.post("", status_code=status.HTTP_201_CREATED)
def create_book(book: schemas.BookRequest, db: Session = Depends(get_db)):
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