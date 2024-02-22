from sqlalchemy import Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship

from database import Base


class Book(Base):
  __tablename__ = "books"
  id = Column(String, primary_key=True, index=True)
  title = Column(String)
  author = Column(String)
  genre = Column(String)
  image_url = Column(String)
  rating = Column(Float)
  
