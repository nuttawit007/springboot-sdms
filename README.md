# Student Data Management System (SDMS)

Student Data Management System (SDMS) is a full-stack web application developed to manage student information efficiently. The frontend is built with **React**, while the backend is powered by **Spring Boot**, providing a modern and scalable architecture for handling student data.

## 📚 Project Overview

The system is designed to simplify student record management through an easy-to-use web interface.

The application allows users to:

- Add new student records
- View student details
- Update existing student information
- Delete student records
- Manage student data in a more organized and efficient way

This project demonstrates full-stack web development by integrating a responsive frontend with a robust backend service.

## 🚀 Installation
### 1. Clone Project:
```
git clone https://github.com/nuttawit007/springboot-sdms.git
cd springboot-sdms
```
### 2. Create the environment file
```
touch .env
```
Example:
```
POSTGRES_DB=sdms
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
```
### 3. Run the project with Docker Compose
```
docker compose up -d
```
### 4. Access the application
Once the containers are running, the services will be available at:
- Frontend: `http://localhost:5173`
- pgAdmin: `http://localhost:5050`

## 🖥️  Tech Stack

- **Frontend:** React
- **Backend:** Spring Boot
- **Database:** PostgreSQL
- **API:** RESTful API

## ✨ Key Features

- CRUD operations for student records
- Clean and user-friendly interface
- Full-stack integration between React and Spring Boot
- Scalable structure for future enhancements

## 📁 Project Structure

```bash
sdms/
├── frontend/   # React application
├── backend/    # Spring Boot application
└── README.md
