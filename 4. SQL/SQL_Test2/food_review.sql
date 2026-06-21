CREATE TABLE food (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    restaurant_name VARCHAR(50),
    open_year YEAR
);

CREATE TABLE reviewers (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE reviews (
	id INT PRIMARY KEY AUTO_INCREMENT,
    rating DECIMAL(2,1),
    food_id INT,
    reviewer_id INT,
    FOREIGN KEY (food_id)
		REFERENCES food(id),
	FOREIGN KEY (reviewer_id)
		REFERENCES reviewers(id)
);

INSERT INTO food (name, restaurant_name, open_year) VALUES
('Burger', 'Burger Shack', 2005), 
('Pizza', 'Pizza Palace', 2010), 
('Sushi', 'Dim Sum Palace', 2015), 
('Tacos', 'Taco Town', 2008), 
('Pasta', 'Steakhouse Supreme', 2012), 
('Steak', 'Steakhouse Supreme', 2003), 
('Salad', 'Steakhouse Supreme', 2018), 
('Ramen', 'Dim Sum Palace', 2016), 
('Fried Chicken', 'Burger Shack', 2006), 
('Ice Cream', 'Burger Shack', 2014),
('Fish and Chips', 'Burger Shack', 2007), 
('Curry', 'Taco Town', 2011), 
('Burrito', 'Taco Town', 2009), 
('Dim Sum', 'Dim Sum Palace', 2013), 
('BBQ Ribs', 'Steakhouse Supreme', 2017);

INSERT INTO reviewers (first_name, last_name) VALUES
('John', 'Doe'), 
('Jane', 'Smith'), 
('Michael', 'Johnson'), 
('Emily', 'Williams'), 
('David', 'Martinez'),
('Jennifer', 'Garcia'), 
('Christopher', 'Jones');

INSERT INTO reviews(food_id, reviewer_id, rating) VALUES
(1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9),
(2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9),
(3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0),
(4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5),
(5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9),
(6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1),
(7,2,9.1),(7,5,9.7),
(8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3),
(9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5),
(10,5,9.9),
(13,3,8.0),(13,4,7.2),
(14,2,8.5),(14,3,8.9),(14,4,8.9);