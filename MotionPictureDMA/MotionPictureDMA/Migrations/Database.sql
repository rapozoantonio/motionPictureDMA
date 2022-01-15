
        CREATE TABLE dbo.MotionPictures(
        Id INT NOT NULL IDENTITY PRIMARY KEY,
        Name NVARCHAR(50) NOT NULL,
        Description NVARCHAR(500),
        Release_Year INT NOT NULL
        );


        INSERT INTO dbo.MotionPictures VALUES ("First Image","This is the First Image",2020);
