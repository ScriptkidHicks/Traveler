# Build the application from python 3.9
FROM python:3.9
COPY . /app
WORKDIR /app

# Make sure to install the required libs and run
RUN pip install -r requirements.txt
CMD ["python", "app.py"]