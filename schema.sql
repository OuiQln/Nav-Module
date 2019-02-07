DROP DATABASE IF EXISTS uniqlo_inv;
CREATE DATABASE uniqlo_inv;
USE uniqlo_inv;

CREATE TABLE product(
  id INT NOT NULL AUTO_INCREMENT,
  product_typeid INT (255) NOT NULL,
  priduct_price DECIMAL (65) NOT NULL,
  product_image VARCHAR(100) NOT NULL,
  product_description VARCHAR (50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE product_type(
  id INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)

);