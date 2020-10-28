FROM python:3.7

WORKDIR /app

RUN apt update && \
    apt install -y python3-pip

COPY requirements.txt requirements.txt

RUN pip3 install --upgrade pip && \
    pip3 install -r requirements.txt
