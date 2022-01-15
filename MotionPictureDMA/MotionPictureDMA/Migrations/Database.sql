CREATE TABLE dbo.MotionPictures(
Id INT NOT NULL IDENTITY PRIMARY KEY,
Name NVARCHAR(50) NOT NULL,
Description NVARCHAR(500),
Release_Year INT NOT NULL,
PictureFileName NVARCHAR(260)
);

INSERT INTO dbo.MotionPictures 
VALUES 
('Antonio','Hi! Instead of random motion pictures I decided to share things about my brothers, to keep things interesting..',1993,'Antonio.png'),
('Pedro','Biologist and the next Bear Grylls.',1996,'Pedro.png'),
('Joao','Mathematician and data science aspirant.',1999,'Joao.png'),
('Julio','Would you play minecraft with me?',2001,'Julio.png'),
('Alda','Teacher and mother of 4 beautiful children!',1982,'Alda.png'),
('Gerson','An elder brother teaches his siblings about life values.',1956,'Gerson.png'),
('Andre','Jiu Jitsu Black Belt.',1973,'Andre.png'),
('Marcelo','Dentist and father of two.',1971,'Marcelo.png')
;
