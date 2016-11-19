###schema
CREATE DATABASE IF NOT EXISTS project2_db;

USE project2_db;

CREATE TABLE available
(
	id int NOT NULL AUTO_INCREMENT,
	price int NOT NULL,
	mainPic LONGTEXT NOT NULL,
	pic2 LONGTEXT,
	pic3 LONGTEXT,
	pic4 LONGTEXT,
	itemName varchar(500) NOT NULL,
	posterName varchar(20) NOT NULL,
	posterContactNumber varchar(12) NOT NULL,
	longDescription TEXT,
	sold BOOLEAN,
	datePosted timestamp NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE wanted
(
	id int NOT NULL AUTO_INCREMENT,
	mainPic LONGTEXT NOT NULL,
	pic2 LONGTEXT,
	pic3 LONGTEXT,
	pic4 LONGTEXT,
	itemName varchar(500) NOT NULL,
	posterName varchar(20) NOT NULL,
	posterContactNumber varchar(12) NOT NULL,
	longDescription TEXT,
	found BOOLEAN,
	datePosted timestamp NOT NULL,
	PRIMARY KEY (id)
);

