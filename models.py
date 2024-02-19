from sqlalchemy import Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from database import Base


class Book(Base):
  __tablename__ = "books"
  id = Column(Integer, primary_key=True, index=True)
  title = Column(String)
  author = Column(String)
  genre = Column(String)
  image = Column(String)
  rating = Column(Float)
  
