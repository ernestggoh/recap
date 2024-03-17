from fastapi import APIRouter
import boto3
import uuid
from datetime import datetime

router = APIRouter()

# Initialize the boto3 DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('journal_entries')  # Replace 'journal_entries' with your DynamoDB table name

@router.get("/journal_entries")
def get_journal_entries():
    response = table.scan()
    return response['Items']


@router.post("/journal_entries")
def create_journal_entry(message: str):
    item = {
        'pk': str(uuid.uuid4()),
        'sk': datetime.now().isoformat(),
        'message': message
    }
    table.put_item(Item=item)
    return {"message": "Journal entry created successfully"}
