###schema
CREATE DATABASE IF NOT EXISTS project2_db;

USE project2_db;

CREATE TABLE available
(
	id int NOT NULL AUTO_INCREMENT,
	price int NOT NULL,
	mainPic TEXT NOT NULL,
	pic2 TEXT,
	pic3 TEXT,
	pic4 TEXT,
	itemName varchar(500) NOT NULL,
	posterName varchar(20) NOT NULL,
	posterContactNumber varchar(12) NOT NULL,
	longDescription TEXT,
	shortDescription TEXT,
	sold BOOLEAN,
	PRIMARY KEY (id)
);

CREATE TABLE wanted
(
	id int NOT NULL AUTO_INCREMENT,
	mainPic TEXT NOT NULL,
	pic2 TEXT,
	pic3 TEXT,
	pic4 TEXT,
	itemName varchar(500) NOT NULL,
	posterName varchar(20) NOT NULL,
	posterContactNumber varchar(12) NOT NULL,
	longDescription TEXT,
	shortDescription TEXT,
	found BOOLEAN,
	PRIMARY KEY (id)
);

-- "mainPic:LONGBLOB NOT NULL,pic2:LONGBLOB,pic3:LONGBLOB,pic4:LONGBLOB,itemName:varchar(500) NOT NULL,posterName:varchar(20) NOT NULL,posterContactNumber:varchar(12) NOT NULL,longDescription:TEXT,shortDescription:TEXT"
