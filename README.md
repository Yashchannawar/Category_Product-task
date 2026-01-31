# Product & Category Management System

A backend web application built using Node.js, Express.js, and MySQL.  
This project provides REST APIs to manage categories and products, where each product belongs to a category.

---

## Features
- Category CRUD operations (Create, Read, Update, Delete)
- Product CRUD operations
- Product mapped with Category (Foreign Key)
- RESTful APIs
- EJS-based frontend pages for Categories  and  Products
- MySQL database integration
- Environment-based configuration using .env

---

## Tech Stack
- Backend: Node.js, Express.js  
- Frontend: EJS (Embedded JavaScript templates) View Engine 
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
├── public/
│ └── style.css
├── routes/
│ ├── categoryRoutes.js
│ └── productRoutes.js
├── views/
│ ├── categories.ejs
│ └── edit-categories.ejs
│ ├── edit-products.ejs
│ └── products.ejs
├── database.sql
├── .env.example
├── .gitignore
├── package.json
├── index.js
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
- GET /api/categories – Get all categories
- POST /api/categories – Create a new category
- PUT /api/categories/:id – Update category by ID
- DELETE /api/categories/:id – Delete category by ID

### Products
- GET /api/products – Get all products
- POST /api/products – Create a new product
- PUT /api/products/:id – Update product by ID
- DELETE /api/products/:id – Delete product by ID

# Frontend Pages (EJS)

Category List: /categories – Display all categories

Edit Category: /categories/edit/:id – Form to update a category

Product List: /products – Display all products with category name

Edit Product: /products/edit/:id – Form to update a product

- Both correspond to the Update part of CRUD, but need separate pages to display the current data and allow edits.

## Security Note

The .env file is not pushed to GitHub for security reasons.
Use .env.example as reference.

