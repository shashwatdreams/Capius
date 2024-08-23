import os
import openai
import time
openai.api_key = ""

# Create the file object
file_response = openai.File.create(
  file=open("data.jsonl", "rb"),
  purpose='fine-tune'
)

# Get the file ID
file_id = file_response['id']

# Check the file's status
status = file_response['status']
while status != 'processed':
    print(f"File status: {status}. Waiting for the file to be processed...")
    time.sleep(10)  # Wait for 10 seconds
    file_response = openai.File.retrieve(file_id)
    status = file_response['status']

# Create the fine-tuning job using the file ID
if status == 'processed':
    fine_tuning_response = openai.FineTuningJob.create(
      training_file=file_id,
      model="gpt-3.5-turbo"
    )
    fine_tuning_job_id = fine_tuning_response['id'] # Store the fine-tuning job ID
else:
    print(f"File processing failed with status: {status}")

# Retrieve the state of the fine-tuning job later on
fine_tuning_job = openai.FineTuningJob.retrieve(fine_tuning_job_id)
status_of_fine_tuning_job = fine_tuning_job['status']
print(f"Fine-tuning job status: {status_of_fine_tuning_job}")






