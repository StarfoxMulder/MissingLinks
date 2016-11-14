CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	price int NOT NULL,
	mainPic LONGTEXT NOT NULL, 
	pic2 LONGTEXT,
	pic3 LONGTEXT,
	pic4 LONGTEXT,
	itemName varchar(500) NOT NULL,
	posterName varchar(20) NOT NULL,
	longDescription TEXT,
	shortDescription TINYTEXT,
	sold BOOLEAN,
	datePosted timestamp NOT NULL,
	PRIMARY KEY (id)
);