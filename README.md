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

## Ports Used

| Service             | Port  |
|--------------------|-------|
| Node.js Application | 8090  |
| MongoDB             | 27017 |
| Redis               | 6379  |
## 1. Node.js

## Introduction:


## Requirements:

## How to Install Node.js

## 2. MongoDB 

## Introduction

## How to Install MongoDB 


## 3. Redis

## Introduction

## How to Install  Redis

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/`      | GET    | Confirms the app is running |
| `/health`| GET    | Shows health status of MongoDB & Redis |

---

## Conclusion

This project shows how a Node.js application can be containerized using Docker and Docker Compose with MongoDB for storage and Redis for caching. It provides a simple, scalable, and portable backend setup.
