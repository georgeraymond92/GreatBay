CREATE DATABASE greatBay_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  bidStart INTEGER(10) NOT NULL,
  currentbid INT NULL,
  description VARCHAR(1000)
);