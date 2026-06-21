CREATE TABLE Customers (
	CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(50),
    Phone VARCHAR(15)
);

CREATE TABLE Rentals (
	RentalID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID INT,
    RentalStartDate DATE,
    RentalEndDate DATE,
    TotalPrice DECIMAL(8,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (FirstName, LastName, Email, Phone) VALUES
('John', 'Doe', 'john.doe@example.com', '123-456-7890'),
('Jane', 'Smith', 'jane.smith@example.com', '987-654-3210'),
('Michael', 'Johnson', 'michael.johnson@example.com', '456-789-0123'),
('Emily', 'Williams', 'emily.williams@example.com', '789-012-3456'),
('David', 'Martinez', 'david.martinez@example.com', '345-678-9012'),
('Jennifer', 'Garcia', 'jennifer.garcia@example.com', '012-345-6789'),
('Christopher', 'Jones', 'christopher.jones@example.com', '234-567-8901'),
('Jessica', 'Brown', 'jessica.brown@example.com', '567-890-1234'),
('Andrew', 'Taylor', 'andrew.taylor@example.com', '678-901-2345'),
('Rachel', 'Thomas', 'rachel.thomas@example.com', '890-123-4567');

INSERT INTO Rentals (CustomerID, RentalStartDate, RentalEndDate, TotalPrice) VALUES
(1, '2023-01-10', '2023-01-15', 250.00),
(2, '2023-02-15', '2023-02-20', 275.00),
(3, '2023-03-20', '2023-03-25', 350.00),
(4, '2023-04-25', '2023-04-30', 300.00),
(5, '2023-05-10', '2023-05-15', 325.00),
(6, '2023-06-15', '2023-06-20', 500.00),
(7, '2023-07-20', '2023-07-25', 450.00),
(8, '2023-08-25', '2023-08-30', 475.00),
(9, '2023-09-30', '2023-10-05', 225.00),
(10, '2023-10-15', '2023-10-20', 300.00);