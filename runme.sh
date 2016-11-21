sequelize model:create --name Available --attributes "price:INT,mainPic:LONGBLOB,pic2:LONGBLOB,pic3:LONGBLOB,pic4:LONGBLOB,itemName:STRING,posterName:STRING,posterContactNumber:STRING,longDescription:TEXT,shortDescription:TEXT"
sequelize model:create --name Wanted --attributes "mainPic:LONGBLOB,pic2:LONGBLOB,pic3:LONGBLOB,pic4:LONGBLOB,itemName:STRING,posterName:STRING,posterContactNumber:STRING,longDescription:TEXT,shortDescription:TEXT"
node sync.js
# node insert.js
