<p align="center">
  <a href="https://vitejs.dev/" target="_blank">
    <img src="https://vitejs.dev/logo.svg" width="100" alt="Vite Logo" />
  </a>
  &nbsp;&nbsp;
  <a href="https://react.dev/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="100" alt="React Logo" />
  </a>
  &nbsp;&nbsp;
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://nodejs.org/static/images/logo.svg" width="100" alt="Node.js Logo" />
  </a>
</p>



# Product Rating & Review System

A Full-stack Web Application where users can register, log in, view products, and submit reviews for them. The app uses a Node.js + Express backend, MySQL database, and a Vite + React frontend.

---

## 📌 Project Description

The Product Rating & Review System enables users to browse a list of products across various categories (e.g., electronics, fashion, food, etc.), register/login securely, and leave ratings and textual reviews for each product. Admins or developers can seed products into the system.

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js (v16+ recommended)
- MySQL Server
- npm / yarn
- Git (optional)

---

### 🚀 How to Run the Backend

1. **Install dependencies:**

   ```bash
   cd backendapp
   npm install
   ```
2. **Create a .env File**
  ```bash
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_password
  DB_NAME=product_reviews
  PORT=5000
```
3. **Start the Server**
   ```bash
   node app.js
   ```
The backend will be live at: ```bash http://localhost:5000 ```

### 🚀 How to Run the Frontend

1. **Install dependencies**
  
  ```bash
  cd frontendapp
  npm install
```
2. **Start the Vite dev Server**
   ```bash
   npm run dev
   ```
The frontend will run on: ```bash http://localhost:5173 ```

###🛢️ How to Set up Database

1. **Open MySQL and Create a Database**
   ```bash
   CREATE DATABASE product_reviews;
   USE product_reviews;
   ```
2. **Create ```bash users ``` table**
   ```bash
   CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
   );
   ```
3. **Create table ```bash reviews ```
  ```bash
  CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  user_id INT,
  rating INT,
  review TEXT,
  photo VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
4. **Create table ```bash products ```
  ```bash
  CREATE TABLE products (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255),
   description TEXT
);
```
5. **Insert sample products into ```bash products ``` table
   For Example:
   ```bash
   INSERT INTO products (name, description) VALUES
    ('Wireless Headphones', 'Bluetooth enabled over-ear headphones with noise cancellation.'),
    ('Gaming Mouse', 'Ergonomic mouse with customizable DPI and RGB lighting.'),
    ('Gourmet Chocolate Box', 'Assorted handcrafted chocolates with exotic flavors.');
   ```

---

**Base URL**

http://localhost:5000

**Endpoints**

**Authentication Endpoints**

1. POST/register
   Input JSON:
    ```bash
    {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secret123"
    }
    ```
  Output JSON:
  ```bash
{
  "message": "User registered successfully"
}
```
2.   POST/login
  Input:
  ```bash
  {
  "email": "john@example.com",
  "password": "secret123"
}
```
  Output:
  ```bash
  {
  "token": "JWT_TOKEN"
  }
```

**Product Endpoints**

1. GET/products
   
   Output:
   
   ```bash
   [
    {
    "id": 1,
    "name": "Wireless Headphones",
    "description": "Bluetooth enabled over-ear headphones..."
    },
    ...
    ]
   ```
   
**Review Endpoints**

1. POST /products/:productId/reviews

   Input:
    ```bash
    {
    "rating": 5,
    "review": "Amazing sound quality!"
    }
    ```
    Output:
     ```bash
     {
    "message": "Review added successfully"
    }
     ```

2. GET /products/:productId/reviews

   Output:
    ```bash
    [
    {
    "id": 1,
    "user_id": 2,
    "rating": 4,
    "review": "Good value for money.",
    "created_at": "2025-06-17T20:00:00Z"
    },
    ...
    ]
    ```
---

**Contact**
For questions or contributions, feel free to reach out or fork the project!
**Email**: syamuppu05@gmail.com
**Author**: Uppu Syam Prasad


  
