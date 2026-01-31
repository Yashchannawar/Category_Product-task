# Product & Category Management System

A backend web application built using Node.js, Express.js, and MySQL.  
This project provides REST APIs to manage categories and products, where each product belongs to a category.

---

## Features
- Category CRUD operations (Create, Read, Update, Delete)
- Product CRUD operations
- Product mapped with Category (Foreign Key)
- RESTful APIs
- MySQL database integration
- Environment-based configuration using .env

---

## Tech Stack
- Backend: Node.js, Express.js  
- Database: MySQL  
- Tools: Postman, GitHub  

---

## Project Structure

backend/
├── config/
│ └── db.js
├── controllers/
│ ├── categoryController.js
│ └── productController.js
├── routes/
│ ├── categoryRoutes.js
│ └── productRoutes.js
├── database.sql
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Yashchannawar/PRODUCTS-APP.git
cd project-name
```
2. Go inside backend folder 
``` cd backend ``` 

3. Install dependencies  
 ```npm install```

4. Create .env from .env.example

5. Fill your DB credentials

6. setup database -> Import database.sql into MySQL
``` bash
mysql -u root -p < database.sql
```
This will create:
- categories table
- products table

7. npm start -> 
 ```md
Server runs at:
http://localhost:3000/api/categories
http://localhost:3000/api/products


## API Endpoints

### Categories
GET /categories
POST /categories
PUT /categories/:id
DELETE /categories/:id

### Products
GET /products
POST /products
PUT /products/:id
DELETE /products/:id

## Security Note

The .env file is not pushed to GitHub for security reasons.
Use .env.example as reference.

