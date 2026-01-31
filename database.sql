CREATE DATABASE product_app;
USE product_app;

CREATE TABLE categories (
  categoryId INT AUTO_INCREMENT PRIMARY KEY,
  categoryName VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  productId INT AUTO_INCREMENT PRIMARY KEY,
  productName VARCHAR(100),
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
);

select * from categories;
select * from  products;

