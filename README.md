# Task Manager REST API

A full-stack Task Manager application built with **Node.js**, **Express**, and **React** following the MVC (Model-View-Controller) architecture.

## Features

- View all tasks
- View a single task
- Add a new task
- Update an existing task
- Delete a task
- Priority levels (Low, Medium, High)
- Frontend connected to the backend using REST API

## 📂 Project Structure

```text
task-manager-api/
│
├── backend/
│   ├── .env
│   ├── index.js
│   ├── config/
│   │   └── env.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── services/
│   │   └── taskService.js
│   ├── data/
│   │   └── taskData.js
│   └── routes/
│       └── taskRoutes.js
│
└── frontend/
```

## Technologies Used

### Backend

- Node.js
- Express
- CORS
- dotenv

### Frontend

- React
- Vite
- Fetch API

## Installation

### Clone the repository

```bash
git clone https://github.com/nebilsefawdin-ops/task-manager.git
```

### Install backend dependencies

```bash
cd backend
npm install
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

## Running the Project

### Start the backend

```bash
cd backend
npm run dev
```

The backend runs on:

```text
http://localhost:4000
```

### Start the frontend

```bash
cd frontend
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| GET    | `/api/tasks/:id` | Get a task by ID  |
| POST   | `/api/tasks`     | Create a new task |
| PATCH  | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

## Task Model

```json
{
  "id": 1,
  "title": "Finish lecture 2 homework",
  "completed": false,
  "priority": "high"
}
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=4000
APP_NAME=Task Manager
```

## Author

Developed as Backend Mini Project using the MVC architecture with Express and React.

### By Nebil Sefawdin
