from sqlalchemy.orm import Session
import models, schemas

def create_book(db: Session, book: schemas.BookRequest):
  db_book = models.Book(title= book.title, author=book.author, genre=book.genre, image=book.image_url, rating=book.rating)
  db.add(db_book)
  db.commit()
  db.refresh(db_book)
  return db_book

def read_books(db: Session):
  return db.query(models.Book).all()

def read_book(db: Session, id: int):
  return db.query(models.Book).filter(models.Book.id == id).first()

def update_book(db: Session, id: int, book: schemas.BookRequest):
  db_book = db.query(models.Book).filter(models.Book.id == id).first()
  if db_book is None:
    return None
  db.query(models.Book).filter(models.Book.id == id).update({'title': book.title, 'author': book.author, 'genre': book.genre, 'image': book.image, 'rating': book.rating})
  db.commit()
  db.refresh(db_book)
  return db_book

def delete_book(db: Session, id: int):
  db_book = db.query(models.Book).filter(models.Book.id == id).first()
  if db_book is None:
    return None
  db.query(models.Book).filter(models.Book.id == id).delete()
  db.commit()
  return True