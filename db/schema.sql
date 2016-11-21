###schema
CREATE DATABASE IF NOT EXISTS project2_db;

USE project2_db;

CREATE TABLE available
(
	id int NOT NULL AUTO_INCREMENT,
	price int NOT NULL,
	mainPic LONGBLOB NOT NULL,
	pic2 LONGBLOB,
	pic3 LONGBLOB,
	pic4 LONGBLOB,
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
	mainPic LONGBLOB NOT NULL,
	pic2 LONGBLOB,
	pic3 LONGBLOB,
	pic4 LONGBLOB,
	itemName varchar(500) NOT NULL,
	posterName varchar(20) NOT NULL,
	posterContactNumber varchar(12) NOT NULL,
	longDescription TEXT,
	found BOOLEAN,
	datePosted timestamp NOT NULL,
	PRIMARY KEY (id)
);

