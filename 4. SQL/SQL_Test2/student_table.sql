CREATE TABLE student (
    stu_id INT PRIMARY KEY AUTO_INCREMENT,
    subject VARCHAR(20),
    GPA DECIMAL(3,2)
);
 
INSERT INTO student (subject, GPA) VALUES
('math', 3.5),
('math', 3.23),
('math', 4),
('math', 2.7),
('math', 3.3),
('math', 3.75),
('math', 3.2),
('computer', 2.5),
('computer', 2),
('computer', 3.5),
('computer', 4),
('computer', 2),
('computer', 3),
('computer', 3.25),
('science', 3.25),
('science', 3),
('science', 2),
('science', 2),
('science', 3.25),
('science', 2.25),
('science', 2);

select stu_id , subject , avg(GPA) ;










