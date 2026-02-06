# Backend Internship Projects – Todo & Book Catalog API

This repository contains two backend projects developed as part of the QSkill Internship Task.

Both projects are built using Node.js, Express.js, and MongoDB following REST API principles.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS
- REST Client & Thunder Client

---

# 📌 Project 1: Todo Backend API

## Features
- Create Todo
- Get All Todos
- Update Todo
- Delete Todo
- Mark Todo as Completed
- RESTful APIs
- JSON based responses

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/todos | Create todo |
| GET | /api/todos | Get all todos |
| PUT | /api/todos/:id | Update todo |
| PUT | /api/todos/:id/complete | Mark complete |
| DELETE | /api/todos/:id | Delete todo |

---

# 📌 Project 2: Book Catalog API

## Features
- Add new book
- View all books
- Get book by ID
- Update book details
- Delete book
- Search by title/author
- Availability management

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Add book |
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get single book |
| PUT | /api/books/:id | Update book |
| DELETE | /api/books/:id | Delete book |
| GET | /api/books/search | Search books |

---

## 📂 Project Structure

project-root/
├ todo-backend/
├ book-catalog/
├ screenshots/
└ README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
git clone <your-repo-link>
cd project-root

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Setup Environment Variables
Create `.env` file in each project:
PORT=3000
MONGO_URL=your_mongodb_connection_string

### 4️⃣ Run Server
node app.js
or
npx nodemon app.js


---

## 🧪 Testing

APIs were tested using:
- Thunder Client (VS Code Extension)
- REST Client

Test cases and screenshots are available in `/screenshots`.

---

## 📸 Screenshots

Screenshots of API testing using Thunder Client/Postman are provided to demonstrate working APIs.

---

## 🎯 Learning Outcomes
- REST API development
- MVC architecture
- Database modeling using Mongoose
- Error handling
- Backend testing
- Project documentation

---

## 👩‍💻 Author
Name: Pratiksha Aghav  
Internship: QSkill Backend Internship  
Year: 2026





