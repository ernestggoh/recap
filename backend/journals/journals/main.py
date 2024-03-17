from fastapi import FastAPI
import boto3
from boto3.dynamodb.conditions import Key
from journals import router

app = FastAPI()
app.include_router(router)
