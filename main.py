import os
from functools import lru_cache
from typing import Union, List

from fastapi import FastAPI, Depends, UploadFile, File
from fastapi.responses import PlainTextResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from fastapi.middleware.cors import CORSMiddleware

from routers import books

import config

app = FastAPI()
app.include_router(books.router)

origins = [
  "http://localhost:3000"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    print(f"{repr(exc)}")
    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)

@lru_cache()
def get_settings():
  return config.Settings()

@app.get("/")
def read_root(settings: config.Settings = Depends(get_settings)):
    print(settings.app_name)
    return "Hello, FastAPI!"

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}