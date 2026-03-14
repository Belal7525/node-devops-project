# Node DevOps Project

## Description
This project is a Node.js backend application running on Docker Compose. It uses MongoDB for data storage and Redis for caching, with all configurations loaded from environment variables. The application provides basic endpoints to check its status and health.

---

## Prerequisites

Before running the application, make sure you have the following installed:

Docker 

Docker Compose 

> Make sure the Docker daemon is running before executing Docker commands.

---

## Project Structure

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/bff06a97-8704-4706-8c6c-277275a39bfa" />

## Ports Used

| Service             | Port  |
|--------------------|-------|
| Node.js Application | 8090  |
| MongoDB             | 27017 |
| Redis               | 6379  |
## 1. Node.js

### Introduction:
Node.js is a JavaScript runtime used to build scalable backend applications.


### Requirements:
Node.js and npm installed on Linux.

### How to Install Node.js
Install using sudo apt install nodejs npm.

## 2. MongoDB 

### Introduction
MongoDB is a NoSQL database used to store application data.

### How to Install MongoDB 
Install MongoDB on Linux using sudo apt install mongodb.

## 3. Redis

### Introduction
Redis is an in-memory key-value store used for caching.

### How to Install  Redis
Install Redis on Linux using sudo apt install redis-server.

### Environment Variables
Create a `.env` file in the project root with the following content:

## How to Run the Project

Run the following command to start all services:

docker compose up --build

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/`      | GET    | Confirms the app is running |
| `/health`| GET    | Shows health status of MongoDB & Redis |

---

# Conclusion

This project shows how a Node.js application can be containerized using Docker and Docker Compose with MongoDB for storage and Redis for caching. It provides a simple, scalable, and portable backend setup.
