sequelize model:create --name=available --attributes "price:INT,mainPic:LONGBLOB NOT NULL,pic2:LONGBLOB,pic3:LONGBLOB,pic4:LONGBLOB,itemName:varchar(500) NOT NULL,posterName:varchar(20) NOT NULL,posterContactNumber:varchar(12) NOT NULL,longDescription:TEXT,shortDescription:TEXT"
sequelize model:create --name=wanted --attributes "mainPic:LONGBLOB NOT NULL,pic2:LONGBLOB,pic3:LONGBLOB,pic4:LONGBLOB,itemName:varchar(500) NOT NULL,posterName:varchar(20) NOT NULL,posterContactNumber:varchar(12) NOT NULL,longDescription:TEXT,shortDescription:TEXT"
node sync.js
# node insert.js
