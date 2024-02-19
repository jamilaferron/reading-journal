from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):

  app_name: str = "Awesome API"

  class Config:
    env_file = "~/.env"