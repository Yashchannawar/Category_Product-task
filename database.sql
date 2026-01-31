CREATE DATABASE product_app;
USE product_app;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoryName VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  productName VARCHAR(100),
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES categories(id)
);

select * from categories;
select * from  products;

