show tables;

-- EX.1 --
SELECT * FROM customers 
	WHERE Country = 'France' AND city != 'lille';
-- EX.2 --
SELECT ContactName FROM customers
	ORDER BY ContactName ASC;
-- EX.3 --
SELECT ContactName FROM customers
	ORDER BY ContactName DESC;
-- EX.4 --
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName FROM Orders
	LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
-- EX.5 --
SELECT orders.OrderID,Orders.OrderDate AS OrderDate,Customers.CustomerName AS CustomerName,Employees.FirstName AS Rmployees FROM orders
	LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID
	LEFT JOIN employees ON orders.EmployeeID = employees.EmployeeID;
-- EX.6 --
SELECT customers.CustomerName AS CustomerName,COUNT(orders.OrderID) AS TotalOrders FROM customers
	LEFT JOIN orders ON customers.CustomerID = orders.CustomerID
	GROUP BY customers.CustomerID , customers.CustomerName
	ORDER BY TotalOrders DESC;
-- EX.7 --
SELECT  customers.CustomerName, COUNT(orders.OrderID) AS TotalOrders FROM customers
	LEFT JOIN orders ON customers.CustomerID = orders.CustomerID
	GROUP BY customers.CustomerID , customers.CustomerName
	HAVING COUNT(orders.OrderID) >= 2
	ORDER BY TotalOrders asc;
-- EX.8 --
SELECT customers.CustomerName,COUNT(DISTINCT orders.OrderID) AS TotalOrders,SUM(order_details.Quantity) AS TotalProductQuantity FROM customers
	LEFT JOIN orders ON customers.CustomerID = orders.CustomerID
	LEFT JOIN order_details ON order_details.OrderID = orders.OrderID 
	GROUP BY customers.CustomerID , customers.CustomerName , customers.Country
	ORDER BY TotalProductQuantity DESC;
-- EX.9 --
SELECT customers.CustomerName,COUNT(DISTINCT orders.OrderID) AS TotalOrders,SUM(order_details.Quantity) AS TotalProductQuantity  FROM customers
	LEFT JOIN orders ON customers.CustomerID = orders.CustomerID
	LEFT JOIN order_details ON order_details.OrderID = orders.OrderID 
	GROUP BY customers.CustomerID , customers.CustomerName , customers.Country
	HAVING SUM(order_details.Quantity) >= 20
ORDER BY TotalProductQuantity asc;
-- EX.10 --  
SELECT customers.CustomerName,COUNT(DISTINCT orders.OrderID) AS TotalOrders,SUM(order_details.Quantity) AS TotalProductQuantity FROM customers
	LEFT JOIN orders ON customers.CustomerID = orders.CustomerID
	LEFT JOIN order_details ON order_details.OrderID = orders.OrderID 
	GROUP BY customers.CustomerID, customers.CustomerName, customers.Country
	ORDER BY TotalProductQuantity DESC;
----------

select * from orders ;
select * from customers ;
select * from order_details ;
select * from Employees ;
    