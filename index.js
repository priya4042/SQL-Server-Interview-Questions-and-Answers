document.addEventListener('DOMContentLoaded', function () {
    const queries = [
        {
            title: "Basic SQL Query",
            questions: [
                {
                    question: "1. What is SQL?",
                    explanation: "SQL stands for Structured Query Language. It is used for managing and manipulating relational databases.",
                    example: "Example: <pre><code>SELECT * FROM Employees;</code></pre>"
                },
                {
                    question: "2. What is a SELECT statement?",
                    explanation: "The SELECT statement is used to query the database and retrieve data from one or more tables.",
                    example: "Example: <pre><code>SELECT FirstName, LastName FROM Employees;</code></pre>"
                },
                {
                    question: "3. What is a WHERE clause?",
                    explanation: "The WHERE clause is used to filter records based on specified conditions.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE Age > 30;</code></pre>"
                },
                {
                    question: "4. What is an INSERT statement?",
                    explanation: "The INSERT statement is used to add new records to a table.",
                    example: "Example: <pre><code>INSERT INTO Employees (FirstName, LastName, Age) VALUES ('John', 'Doe', 28);</code></pre>"
                },
                {
                    question: "5. What is an UPDATE statement?",
                    explanation: "The UPDATE statement is used to modify existing records in a table.",
                    example: "Example: <pre><code>UPDATE Employees SET Age = 29 WHERE FirstName = 'John';</code></pre>"
                },
                {
                    question: "6. What is a DELETE statement?",
                    explanation: "The DELETE statement is used to remove records from a table.",
                    example: "Example: <pre><code>DELETE FROM Employees WHERE FirstName = 'John';</code></pre>"
                },
                {
                    question: "7. What is a JOIN?",
                    explanation: "JOIN is used to combine rows from two or more tables based on a related column.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees INNER JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "8. What is a PRIMARY KEY?",
                    explanation: "A PRIMARY KEY is a unique identifier for a record in a table. It must contain unique values and cannot be NULL.",
                    example: "Example: <pre><code>CREATE TABLE Employees (EmployeeID INT PRIMARY KEY, FirstName NVARCHAR(50));</code></pre>"
                },
                {
                    question: "9. What is a FOREIGN KEY?",
                    explanation: "A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.",
                    example: "Example: <pre><code>CREATE TABLE Departments (DeptID INT PRIMARY KEY, DeptName NVARCHAR(50));<br>CREATE TABLE Employees (EmployeeID INT PRIMARY KEY, DeptID INT FOREIGN KEY REFERENCES Departments(DeptID));</code></pre>"
                },
                {
                    question: "10. What is an INDEX?",
                    explanation: "An INDEX is used to speed up the retrieval of rows by creating a fast-access path to the data.",
                    example: "Example: <pre><code>CREATE INDEX idx_LastName ON Employees (LastName);</code></pre>"
                },
                {
                    question: "11. What is a GROUP BY clause?",
                    explanation: "The GROUP BY clause is used to group rows that have the same values into summary rows.",
                    example: "Example: <pre><code>SELECT DeptID, COUNT(*) AS EmployeeCount FROM Employees GROUP BY DeptID;</code></pre>"
                },
                {
                    question: "12. What is a HAVING clause?",
                    explanation: "The HAVING clause is used to filter groups based on specified conditions, often used with GROUP BY.",
                    example: "Example: <pre><code>SELECT DeptID, COUNT(*) AS EmployeeCount FROM Employees GROUP BY DeptID HAVING COUNT(*) > 5;</code></pre>"
                },
                {
                    question: "13. What is a UNION?",
                    explanation: "The UNION operator is used to combine the results of two or more SELECT statements into a single result set.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 UNION SELECT FirstName FROM Employees WHERE DeptID = 2;</code></pre>"
                },
                {
                    question: "14. What is a VIEW?",
                    explanation: "A VIEW is a virtual table based on the result set of a SELECT query. It can be used to simplify complex queries.",
                    example: "Example: <pre><code>CREATE VIEW EmployeeView AS SELECT FirstName, LastName FROM Employees;</code></pre>"
                },
                {
                    question: "15. What is a SUBQUERY?",
                    explanation: "A SUBQUERY is a query nested inside another query. It is used to provide results to the main query.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE DeptID IN (SELECT DeptID FROM Departments WHERE DeptName = 'HR');</code></pre>"
                },
                {
                    question: "16. What is a Stored Procedure?",
                    explanation: "A Stored Procedure is a precompiled collection of SQL statements that can be executed as a unit.",
                    example: "Example: <pre><code>CREATE PROCEDURE GetEmployeeByID @EmployeeID INT AS BEGIN SELECT * FROM Employees WHERE EmployeeID = @EmployeeID; END;</code></pre>"
                },
                {
                    question: "17. What is a Trigger?",
                    explanation: "A Trigger is a special kind of stored procedure that automatically executes when certain events occur in the database.",
                    example: "Example: <pre><code>CREATE TRIGGER trg_AfterInsert ON Employees AFTER INSERT AS BEGIN PRINT 'A new employee has been added'; END;</code></pre>"
                },
                {
                    question: "18. What is a Cursor?",
                    explanation: "A Cursor is a database object used to retrieve, manipulate, and navigate through a result set row by row.",
                    example: "Example: <pre><code>DECLARE employee_cursor CURSOR FOR SELECT FirstName FROM Employees; OPEN employee_cursor; FETCH NEXT FROM employee_cursor INTO @FirstName; CLOSE employee_cursor; DEALLOCATE employee_cursor;</code></pre>"
                },
                {
                    question: "19. What is a Temporary Table?",
                    explanation: "A Temporary Table is a table that is only available during the session in which it was created.",
                    example: "Example: <pre><code>CREATE TABLE #TempEmployees (EmployeeID INT, FirstName NVARCHAR(50)); INSERT INTO #TempEmployees VALUES (1, 'John'); SELECT * FROM #TempEmployees;</code></pre>"
                },
                {
                    question: "20. What is a Common Table Expression (CTE)?",
                    explanation: "A CTE provides a way to create a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.",
                    example: "Example: <pre><code>WITH EmployeeCTE AS (SELECT * FROM Employees WHERE Age > 30) SELECT * FROM EmployeeCTE;</code></pre>"
                },
                {
                    question: "21. What is an Aliasing in SQL?",
                    explanation: "Aliasing is used to give a table or a column a temporary name. This is useful for improving query readability.",
                    example: "Example: <pre><code>SELECT FirstName AS Name FROM Employees;</code></pre>"
                },
                {
                    question: "22. What is a DISTINCT keyword?",
                    explanation: "The DISTINCT keyword is used to return unique values, removing duplicates from the result set.",
                    example: "Example: <pre><code>SELECT DISTINCT DeptID FROM Employees;</code></pre>"
                },
                {
                    question: "23. What is an Aggregate Function?",
                    explanation: "Aggregate functions perform a calculation on a set of values and return a single value, such as COUNT, SUM, AVG, MAX, MIN.",
                    example: "Example: <pre><code>SELECT AVG(Salary) FROM Employees;</code></pre>"
                },
                {
                    question: "24. What is a LIKE operator?",
                    explanation: "The LIKE operator is used to search for a specified pattern in a column.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE FirstName LIKE 'J%';</code></pre>"
                },
                {
                    question: "25. What is an ORDER BY clause?",
                    explanation: "The ORDER BY clause is used to sort the result set in ascending or descending order.",
                    example: "Example: <pre><code>SELECT * FROM Employees ORDER BY LastName ASC;</code></pre>"
                },
                {
                    question: "26. What is a BETWEEN operator?",
                    explanation: "The BETWEEN operator is used to filter the result set within a certain range.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE Salary BETWEEN 30000 AND 50000;</code></pre>"
                },
                {
                    question: "27. What is a NULL value?",
                    explanation: "A NULL value represents the absence of a value or an unknown value in a column.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE MiddleName IS NULL;</code></pre>"
                },
                {
                    question: "28. What is a CASE statement?",
                    explanation: "The CASE statement provides conditional logic to SQL queries, allowing different actions based on conditions.",
                    example: "Example: <pre><code>SELECT FirstName, CASE WHEN Age > 30 THEN 'Senior' ELSE 'Junior' END AS EmployeeType FROM Employees;</code></pre>"
                },
                {
                    question: "29. What is a Self-JOIN?",
                    explanation: "A Self-JOIN is a regular join but the table is joined with itself.",
                    example: "Example: <pre><code>SELECT e1.FirstName AS Employee, e2.FirstName AS Manager FROM Employees e1 INNER JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;</code></pre>"
                },
                {
                    question: "30. What is a CROSS JOIN?",
                    explanation: "A CROSS JOIN returns the Cartesian product of two tables, meaning it combines all rows from the first table with all rows from the second table.",
                    example: "Example: <pre><code>SELECT * FROM Employees CROSS JOIN Departments;</code></pre>"
                },
                {
                    question: "31. What is a LEFT JOIN?",
                    explanation: "A LEFT JOIN returns all rows from the left table and the matched rows from the right table. If no match, NULL values are returned for columns from the right table.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees LEFT JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "32. What is a RIGHT JOIN?",
                    explanation: "A RIGHT JOIN returns all rows from the right table and the matched rows from the left table. If no match, NULL values are returned for columns from the left table.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees RIGHT JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "33. What is an INNER JOIN?",
                    explanation: "An INNER JOIN returns only the rows where there is a match in both tables.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees INNER JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "34. What is a FULL OUTER JOIN?",
                    explanation: "A FULL OUTER JOIN returns all rows when there is a match in one of the tables. Rows without matches in one table will have NULL values.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees FULL OUTER JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "35. What is a TRUNCATE statement?",
                    explanation: "The TRUNCATE statement removes all rows from a table but does not log individual row deletions. It is faster than DELETE.",
                    example: "Example: <pre><code>TRUNCATE TABLE Employees;</code></pre>"
                },
                {
                    question: "36. What is a REPLACE function?",
                    explanation: "The REPLACE function is used to replace occurrences of a specified substring with another substring.",
                    example: "Example: <pre><code>SELECT REPLACE(FirstName, 'John', 'Jane') AS NewName FROM Employees;</code></pre>"
                },
                {
                    question: "37. What is a SUBSTRING function?",
                    explanation: "The SUBSTRING function extracts a part of a string from a specified start position and length.",
                    example: "Example: <pre><code>SELECT SUBSTRING(FirstName, 1, 3) AS ShortName FROM Employees;</code></pre>"
                },
                {
                    question: "38. What is a LEN function?",
                    explanation: "The LEN function returns the number of characters in a string.",
                    example: "Example: <pre><code>SELECT LEN(FirstName) AS NameLength FROM Employees;</code></pre>"
                },
                {
                    question: "39. What is a CHARINDEX function?",
                    explanation: "The CHARINDEX function returns the starting position of a specified substring within a string.",
                    example: "Example: <pre><code>SELECT CHARINDEX('John', FirstName) AS Position FROM Employees;</code></pre>"
                },
                {
                    question: "40. What is a DATEPART function?",
                    explanation: "The DATEPART function returns a specific part of a date, such as year, month, or day.",
                    example: "Example: <pre><code>SELECT DATEPART(YEAR, HireDate) AS HireYear FROM Employees;</code></pre>"
                },
                {
                    question: "41. What is a DATEDIFF function?",
                    explanation: "The DATEDIFF function calculates the difference between two dates in terms of specified date parts.",
                    example: "Example: <pre><code>SELECT DATEDIFF(DAY, HireDate, GETDATE()) AS DaysEmployed FROM Employees;</code></pre>"
                },
                {
                    question: "42. What is a GETDATE function?",
                    explanation: "The GETDATE function returns the current system date and time.",
                    example: "Example: <pre><code>SELECT GETDATE() AS CurrentDateTime;</code></pre>"
                },
                {
                    question: "43. What is a CAST function?",
                    explanation: "The CAST function converts an expression from one data type to another.",
                    example: "Example: <pre><code>SELECT CAST(Salary AS VARCHAR(10)) AS SalaryText FROM Employees;</code></pre>"
                },
                {
                    question: "44. What is a CONVERT function?",
                    explanation: "The CONVERT function is used to convert an expression from one data type to another with optional formatting.",
                    example: "Example: <pre><code>SELECT CONVERT(VARCHAR(10), HireDate, 101) AS FormattedHireDate FROM Employees;</code></pre>"
                },
                {
                    question: "45. What is a COALESCE function?",
                    explanation: "The COALESCE function returns the first non-null value from a list of expressions.",
                    example: "Example: <pre><code>SELECT COALESCE(MiddleName, 'N/A') AS MiddleName FROM Employees;</code></pre>"
                },
                {
                    question: "46. What is a NULLIF function?",
                    explanation: "The NULLIF function returns NULL if two expressions are equal, otherwise, it returns the first expression.",
                    example: "Example: <pre><code>SELECT NULLIF(Salary, 0) AS Salary FROM Employees;</code></pre>"
                },
                {
                    question: "47. What is an EXECUTE statement?",
                    explanation: "The EXECUTE statement is used to run a stored procedure or dynamic SQL statements.",
                    example: "Example: <pre><code>EXEC GetEmployeeByID @EmployeeID = 1;</code></pre>"
                },
                {
                    question: "48. What is a SET statement?",
                    explanation: "The SET statement is used to assign a value to a variable.",
                    example: "Example: <pre><code>DECLARE @EmployeeName NVARCHAR(50); SET @EmployeeName = 'John'; SELECT @EmployeeName;</code></pre>"
                },
                {
                    question: "49. What is a FETCH statement?",
                    explanation: "The FETCH statement is used with cursors to retrieve the next row in the result set.",
                    example: "Example: <pre><code>FETCH NEXT FROM employee_cursor INTO @FirstName;</code></pre>"
                },
                {
                    question: "50. What is a MERGE statement?",
                    explanation: "The MERGE statement allows performing INSERT, UPDATE, and DELETE operations in a single statement based on a condition.",
                    example: "Example: <pre><code>MERGE INTO Employees AS target USING (SELECT EmployeeID, FirstName FROM NewEmployees) AS source ON target.EmployeeID = source.EmployeeID WHEN MATCHED THEN UPDATE SET target.FirstName = source.FirstName WHEN NOT MATCHED THEN INSERT (EmployeeID, FirstName) VALUES (source.EmployeeID, source.FirstName);</code></pre>"
                }
            ]

        },
        {
            title: "Intermediate SQL Query",
            questions: [
                {
                    question: "1. What is a GROUP BY clause?",
                    explanation: "The GROUP BY clause is used to group rows that have the same values into summary rows.",
                    example: "Example: <pre><code>SELECT DeptID, COUNT(*) AS EmployeeCount FROM Employees GROUP BY DeptID;</code></pre>"
                },
                {
                    question: "2. What is a HAVING clause?",
                    explanation: "The HAVING clause is used to filter groups based on specified conditions, often used with GROUP BY.",
                    example: "Example: <pre><code>SELECT DeptID, COUNT(*) AS EmployeeCount FROM Employees GROUP BY DeptID HAVING COUNT(*) > 5;</code></pre>"
                },
                {
                    question: "3. What is a UNION?",
                    explanation: "The UNION operator is used to combine the results of two or more SELECT statements into a single result set.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 UNION SELECT FirstName FROM Employees WHERE DeptID = 2;</code></pre>"
                },
                {
                    question: "4. What is a VIEW?",
                    explanation: "A VIEW is a virtual table based on the result set of a SELECT query. It can be used to simplify complex queries.",
                    example: "Example: <pre><code>CREATE VIEW EmployeeView AS SELECT FirstName, LastName FROM Employees;</code></pre>"
                },
                {
                    question: "5. What is a SUBQUERY?",
                    explanation: "A SUBQUERY is a query nested inside another query. It is used to provide results to the main query.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE DeptID IN (SELECT DeptID FROM Departments WHERE DeptName = 'HR');</code></pre>"
                },
                {
                    question: "6. What is a Stored Procedure?",
                    explanation: "A Stored Procedure is a precompiled collection of SQL statements that can be executed as a unit.",
                    example: "Example: <pre><code>CREATE PROCEDURE GetEmployeeByID @EmployeeID INT AS BEGIN SELECT * FROM Employees WHERE EmployeeID = @EmployeeID; END;</code></pre>"
                },
                {
                    question: "7. What is a Trigger?",
                    explanation: "A Trigger is a special kind of stored procedure that automatically executes when certain events occur in the database.",
                    example: "Example: <pre><code>CREATE TRIGGER trg_AfterInsert ON Employees AFTER INSERT AS BEGIN PRINT 'A new employee has been added'; END;</code></pre>"
                },
                {
                    question: "8. What is a Cursor?",
                    explanation: "A Cursor is a database object used to retrieve, manipulate, and navigate through a result set row by row.",
                    example: "Example: <pre><code>DECLARE employee_cursor CURSOR FOR SELECT FirstName FROM Employees; OPEN employee_cursor; FETCH NEXT FROM employee_cursor INTO @FirstName; CLOSE employee_cursor; DEALLOCATE employee_cursor;</code></pre>"
                },
                {
                    question: "9. What is a Temporary Table?",
                    explanation: "A Temporary Table is a table that is only available during the session in which it was created.",
                    example: "Example: <pre><code>CREATE TABLE #TempEmployees (EmployeeID INT, FirstName NVARCHAR(50)); INSERT INTO #TempEmployees VALUES (1, 'John'); SELECT * FROM #TempEmployees;</code></pre>"
                },
                {
                    question: "10. What is a Common Table Expression (CTE)?",
                    explanation: "A CTE provides a way to create a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.",
                    example: "Example: <pre><code>WITH EmployeeCTE AS (SELECT * FROM Employees WHERE Age > 30) SELECT * FROM EmployeeCTE;</code></pre>"
                },
                {
                    question: "11. What is the purpose of the RANK() function?",
                    explanation: "The RANK() function assigns a rank to each row within a partition of a result set, with gaps in ranking values if there are ties.",
                    example: "Example: <pre><code>SELECT FirstName, Salary, RANK() OVER (ORDER BY Salary DESC) AS SalaryRank FROM Employees;</code></pre>"
                },
                {
                    question: "12. How does the DENSE_RANK() function differ from RANK()?",
                    explanation: "DENSE_RANK() assigns ranks to rows without gaps, unlike RANK() which has gaps in case of ties.",
                    example: "Example: <pre><code>SELECT FirstName, Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS DenseRank FROM Employees;</code></pre>"
                },
                {
                    question: "13. What is the purpose of the ROW_NUMBER() function?",
                    explanation: "The ROW_NUMBER() function assigns a unique sequential integer to rows within a partition, starting at 1 for the first row.",
                    example: "Example: <pre><code>SELECT FirstName, Salary, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum FROM Employees;</code></pre>"
                },
                {
                    question: "14. What is the purpose of the PARTITION BY clause in window functions?",
                    explanation: "PARTITION BY divides the result set into partitions to which the window function is applied independently.",
                    example: "Example: <pre><code>SELECT DeptID, FirstName, Salary, RANK() OVER (PARTITION BY DeptID ORDER BY Salary DESC) AS RankInDept FROM Employees;</code></pre>"
                },
                {
                    question: "15. What is the purpose of the LEAD() function?",
                    explanation: "The LEAD() function provides access to a row at a specified physical offset from the current row within the result set.",
                    example: "Example: <pre><code>SELECT FirstName, Salary, LEAD(Salary, 1) OVER (ORDER BY Salary) AS NextSalary FROM Employees;</code></pre>"
                },
                {
                    question: "16. How does the LAG() function work?",
                    explanation: "The LAG() function provides access to a row at a specified physical offset before the current row within the result set.",
                    example: "Example: <pre><code>SELECT FirstName, Salary, LAG(Salary, 1) OVER (ORDER BY Salary) AS PreviousSalary FROM Employees;</code></pre>"
                },
                {
                    question: "17. What is a self-join?",
                    explanation: "A self-join is a regular join but the table is joined with itself.",
                    example: "Example: <pre><code>SELECT A.FirstName, B.FirstName AS ManagerName FROM Employees A INNER JOIN Employees B ON A.ManagerID = B.EmployeeID;</code></pre>"
                },
                {
                    question: "18. What is the purpose of the CROSS JOIN?",
                    explanation: "CROSS JOIN returns the Cartesian product of two tables, meaning every row of the first table is combined with every row of the second table.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees CROSS JOIN Departments;</code></pre>"
                },
                {
                    question: "19. How does the FULL OUTER JOIN work?",
                    explanation: "FULL OUTER JOIN returns all records when there is a match in either left or right table. Records not matching in either table will have NULL values for columns from the table where there is no match.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees FULL OUTER JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "20. What is the difference between INNER JOIN and LEFT JOIN?",
                    explanation: "INNER JOIN returns rows with matching values in both tables, while LEFT JOIN returns all rows from the left table and matched rows from the right table; unmatched rows in the right table will have NULL values.",
                    example: "Example: <pre><code>SELECT Employees.FirstName, Departments.DeptName FROM Employees LEFT JOIN Departments ON Employees.DeptID = Departments.DeptID;</code></pre>"
                },
                {
                    question: "21. What is a correlated subquery?",
                    explanation: "A correlated subquery is a subquery that references columns from the outer query and is executed once for each row of the outer query.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees E WHERE Salary > (SELECT AVG(Salary) FROM Employees WHERE DeptID = E.DeptID);</code></pre>"
                },
                {
                    question: "22. What is the purpose of the EXISTS operator?",
                    explanation: "The EXISTS operator is used to test for the existence of any record in a subquery and returns TRUE if the subquery returns one or more rows.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE EXISTS (SELECT 1 FROM Departments WHERE Employees.DeptID = Departments.DeptID);</code></pre>"
                },
                {
                    question: "23. What is the purpose of the NOT EXISTS operator?",
                    explanation: "The NOT EXISTS operator is used to test for the non-existence of any record in a subquery and returns TRUE if the subquery returns no rows.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE NOT EXISTS (SELECT 1 FROM Departments WHERE Employees.DeptID = Departments.DeptID);</code></pre>"
                },
                {
                    question: "24. What is a CASE statement?",
                    explanation: "The CASE statement is used to provide conditional logic within SQL queries, returning different results based on conditions.",
                    example: "Example: <pre><code>SELECT FirstName, CASE WHEN Salary > 50000 THEN 'High' ELSE 'Low' END AS SalaryLevel FROM Employees;</code></pre>"
                },
                {
                    question: "25. How does the COALESCE function work?",
                    explanation: "The COALESCE function returns the first non-NULL value from a list of expressions.",
                    example: "Example: <pre><code>SELECT FirstName, COALESCE(MiddleName, 'N/A') AS MiddleName FROM Employees;</code></pre>"
                },
                {
                    question: "26. What is the purpose of the NULLIF function?",
                    explanation: "The NULLIF function returns NULL if two expressions are equal, otherwise, it returns the first expression.",
                    example: "Example: <pre><code>SELECT FirstName, NULLIF(Salary, 0) AS Salary FROM Employees;</code></pre>"
                },
                {
                    question: "27. How does the CONCAT function work?",
                    explanation: "The CONCAT function is used to concatenate two or more strings into a single string.",
                    example: "Example: <pre><code>SELECT CONCAT(FirstName, ' ', LastName) AS FullName FROM Employees;</code></pre>"
                },
                {
                    question: "28. What is the purpose of the TRIM function?",
                    explanation: "The TRIM function removes specified prefix or suffix characters from a string.",
                    example: "Example: <pre><code>SELECT TRIM(BOTH ' ' FROM FullName) AS CleanName FROM Employees;</code></pre>"
                },
                {
                    question: "29. What is the purpose of the REPLACE function?",
                    explanation: "The REPLACE function replaces occurrences of a specified substring with another substring within a string.",
                    example: "Example: <pre><code>SELECT REPLACE(Email, 'example.com', 'newdomain.com') AS NewEmail FROM Employees;</code></pre>"
                },
                {
                    question: "30. What is the purpose of the SUBSTRING function?",
                    explanation: "The SUBSTRING function extracts a portion of a string based on specified start position and length.",
                    example: "Example: <pre><code>SELECT SUBSTRING(FirstName, 1, 3) AS ShortName FROM Employees;</code></pre>"
                },
                {
                    question: "31. How does the CHARINDEX function work?",
                    explanation: "The CHARINDEX function returns the position of a substring within a string, or zero if the substring is not found.",
                    example: "Example: <pre><code>SELECT CHARINDEX('John', FirstName) AS Position FROM Employees;</code></pre>"
                },
                {
                    question: "32. What is a Recursive CTE?",
                    explanation: "A Recursive CTE is a type of CTE that references itself to perform recursive operations.",
                    example: "Example: <pre><code>WITH RecursiveCTE AS (SELECT EmployeeID, ManagerID FROM Employees WHERE ManagerID IS NULL UNION ALL SELECT e.EmployeeID, e.ManagerID FROM Employees e INNER JOIN RecursiveCTE r ON e.ManagerID = r.EmployeeID) SELECT * FROM RecursiveCTE;</code></pre>"
                },
                {
                    question: "33. What is a Window Function?",
                    explanation: "A Window Function performs calculations across a set of table rows related to the current row, often used with OVER() clause.",
                    example: "Example: <pre><code>SELECT FirstName, Salary, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum FROM Employees;</code></pre>"
                },
                {
                    question: "34. What is an Updatable View?",
                    explanation: "An Updatable View allows modifications to be made to the base tables through the view.",
                    example: "Example: <pre><code>CREATE VIEW v_EmployeeView AS SELECT * FROM Employees WHERE DeptID = 1; UPDATE v_EmployeeView SET Salary = Salary + 5000 WHERE EmployeeID = 1;</code></pre>"
                },
                {
                    question: "35. What is a Partitioned Table?",
                    explanation: "A Partitioned Table is a table that is divided into smaller, more manageable pieces, yet still treated as a single table.",
                    example: "Example: <pre><code>CREATE PARTITION FUNCTION pfDateRange (DATE) AS RANGE LEFT FOR VALUES ('2024-01-01', '2024-06-30'); CREATE PARTITION SCHEME psDateRange AS PARTITION pfDateRange TO ( [PRIMARY], [SECONDARY]); CREATE TABLE Orders (OrderID INT, OrderDate DATE) ON psDateRange (OrderDate);</code></pre>"
                },
                {
                    question: "36. What is a Materialized View?",
                    explanation: "A Materialized View is a database object that contains the results of a query and is physically stored on disk.",
                    example: "Example: <pre><code>CREATE MATERIALIZED VIEW mv_SalarySummary AS SELECT DeptID, AVG(Salary) FROM Employees GROUP BY DeptID;</code></pre>"
                },
                {
                    question: "37. What is SQL Injection?",
                    explanation: "SQL Injection is a code injection technique that exploits a vulnerability in an application's software to execute malicious SQL statements.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE EmployeeID = @EmployeeID; -- Avoid using concatenated SQL statements to prevent SQL Injection</code></pre>"
                },
                {
                    question: "38. What is a Full-Text Search?",
                    explanation: "Full-Text Search allows for sophisticated searching of text data within a database, including finding words and phrases within text columns.",
                    example: "Example: <pre><code>SELECT * FROM Employees WHERE CONTAINS(FirstName, 'John');</code></pre>"
                },
                {
                    question: "39. What is a Columnstore Index?",
                    explanation: "A Columnstore Index is a type of index that stores data in columns rather than rows, optimizing performance for analytical queries.",
                    example: "Example: <pre><code>CREATE COLUMNSTORE INDEX idx_EmployeeColumn ON Employees (FirstName, Salary);</code></pre>"
                },
                {
                    question: "40. What is Sharding?",
                    explanation: "Sharding is a database architecture pattern where data is distributed across multiple database instances to improve performance and scalability.",
                    example: "Example: <pre><code>Data is divided based on a sharding key, e.g., UserID ranges, and stored in different database shards.</code></pre>"
                },
                {
                    question: "41. What is a UNION ALL?",
                    explanation: "UNION ALL combines the results of two or more SELECT statements without removing duplicates.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 UNION ALL SELECT FirstName FROM Employees WHERE DeptID = 2;</code></pre>"
                },
                {
                    question: "42. What is an INTERSECT operation?",
                    explanation: "INTERSECT returns the common rows from two SELECT statements.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 INTERSECT SELECT FirstName FROM Employees WHERE Salary > 50000;</code></pre>"
                },
                {
                    question: "43. What is the purpose of the EXCEPT operator?",
                    explanation: "EXCEPT returns rows from the first SELECT statement that are not present in the second SELECT statement.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 EXCEPT SELECT FirstName FROM Employees WHERE Salary > 50000;</code></pre>"
                },
                {
                    question: "44. How does the TOP clause work?",
                    explanation: "The TOP clause is used to specify the number of rows to return from the result set.",
                    example: "Example: <pre><code>SELECT TOP 5 FirstName FROM Employees ORDER BY Salary DESC;</code></pre>"
                },
                {
                    question: "45. What is a derived table?",
                    explanation: "A derived table is a subquery in the FROM clause of a SQL query that is treated as a temporary table.",
                    example: "Example: <pre><code>SELECT d.FirstName FROM (SELECT FirstName FROM Employees WHERE Salary > 50000) AS d;</code></pre>"
                },
                {
                    question: "46. What is the purpose of the DISTINCT keyword?",
                    explanation: "The DISTINCT keyword is used to remove duplicate rows from the result set.",
                    example: "Example: <pre><code>SELECT DISTINCT DeptID FROM Employees;</code></pre>"
                },
                {
                    question: "47. What is the difference between UNION and UNION ALL?",
                    explanation: "UNION removes duplicate rows between the combined SELECT statements, whereas UNION ALL includes all duplicates.",
                    example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 UNION SELECT FirstName FROM Employees WHERE DeptID = 2; -- UNION ALL includes duplicates</code></pre>"
                },
                {
                    question: "48. How does the ISNULL function work?",
                    explanation: "The ISNULL function replaces NULL with a specified replacement value.",
                    example: "Example: <pre><code>SELECT ISNULL(Salary, 0) AS Salary FROM Employees;</code></pre>"
                },
                {
                    question: "49. What is the purpose of the GROUP BY clause?",
                    explanation: "The GROUP BY clause groups rows that have the same values into summary rows, often used with aggregate functions.",
                    example: "Example: <pre><code>SELECT DeptID, COUNT(*) AS NumEmployees FROM Employees GROUP BY DeptID;</code></pre>"
                },
                {
                    question: "50. What is a HAVING clause?",
                    explanation: "The HAVING clause is used to filter groups based on aggregate function results, similar to the WHERE clause but for grouped data.",
                    example: "Example: <pre><code>SELECT DeptID, COUNT(*) AS NumEmployees FROM Employees GROUP BY DeptID HAVING COUNT(*) > 10;</code></pre>"
                }
            ]
        },
        {
            title: "Advanced SQL Query",
            questions: [
                        {
                            question: "1. What is Dynamic SQL?",
                            explanation: "Dynamic SQL is a programming technique that allows you to build and execute SQL statements at runtime.",
                            example: "Example: <pre><code>DECLARE @sql NVARCHAR(MAX); SET @sql = 'SELECT * FROM Employees WHERE DeptID = ' + CAST(@DeptID AS NVARCHAR); EXEC sp_executesql @sql;</code></pre>"
                        },
                        {
                            question: "2. What is a Recursive CTE?",
                            explanation: "A Recursive CTE is a type of CTE that references itself to perform recursive operations.",
                            example: "Example: <pre><code>WITH RecursiveCTE AS (SELECT EmployeeID, ManagerID FROM Employees WHERE ManagerID IS NULL UNION ALL SELECT e.EmployeeID, e.ManagerID FROM Employees e INNER JOIN RecursiveCTE r ON e.ManagerID = r.EmployeeID) SELECT * FROM RecursiveCTE;</code></pre>"
                        },
                        {
                            question: "3. What is a Window Function?",
                            explanation: "A Window Function performs calculations across a set of table rows related to the current row, often used with the OVER() clause.",
                            example: "Example: <pre><code>SELECT FirstName, Salary, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum FROM Employees;</code></pre>"
                        },
                        {
                            question: "4. What is an Updatable View?",
                            explanation: "An Updatable View allows modifications to be made to the base tables through the view.",
                            example: "Example: <pre><code>CREATE VIEW v_EmployeeView AS SELECT * FROM Employees WHERE DeptID = 1; UPDATE v_EmployeeView SET Salary = Salary + 5000 WHERE EmployeeID = 1;</code></pre>"
                        },
                        {
                            question: "5. What is a Partitioned Table?",
                            explanation: "A Partitioned Table is a table that is divided into smaller, more manageable pieces, yet still treated as a single table.",
                            example: "Example: <pre><code>CREATE PARTITION FUNCTION pfDateRange (DATE) AS RANGE LEFT FOR VALUES ('2024-01-01', '2024-06-30'); CREATE PARTITION SCHEME psDateRange AS PARTITION pfDateRange TO ( [PRIMARY], [SECONDARY]); CREATE TABLE Orders (OrderID INT, OrderDate DATE) ON psDateRange (OrderDate);</code></pre>"
                        },
                        {
                            question: "6. What is a Materialized View?",
                            explanation: "A Materialized View is a database object that contains the results of a query and is physically stored on disk.",
                            example: "Example: <pre><code>CREATE MATERIALIZED VIEW mv_SalarySummary AS SELECT DeptID, AVG(Salary) FROM Employees GROUP BY DeptID;</code></pre>"
                        },
                        {
                            question: "7. What is SQL Injection?",
                            explanation: "SQL Injection is a code injection technique that exploits a vulnerability in an application's software to execute malicious SQL statements.",
                            example: "Example: <pre><code>SELECT * FROM Employees WHERE EmployeeID = @EmployeeID; -- Avoid using concatenated SQL statements to prevent SQL Injection</code></pre>"
                        },
                        {
                            question: "8. What is Full-Text Search?",
                            explanation: "Full-Text Search allows for sophisticated searching of text data within a database, including finding words and phrases within text columns.",
                            example: "Example: <pre><code>SELECT * FROM Employees WHERE CONTAINS(FirstName, 'John');</code></pre>"
                        },
                        {
                            question: "9. What is a Columnstore Index?",
                            explanation: "A Columnstore Index is a type of index that stores data in columns rather than rows, optimizing performance for analytical queries.",
                            example: "Example: <pre><code>CREATE COLUMNSTORE INDEX idx_EmployeeColumn ON Employees (FirstName, Salary);</code></pre>"
                        },
                        {
                            question: "10. What is Sharding?",
                            explanation: "Sharding is a database architecture pattern where data is distributed across multiple database instances to improve performance and scalability.",
                            example: "Example: <pre><code>Data is divided based on a sharding key, e.g., UserID ranges, and stored in different database shards.</code></pre>"
                        },
                        {
                            question: "11. What is an Indexed View?",
                            explanation: "An Indexed View, also known as a materialized view, is a view that has a unique clustered index created on it.",
                            example: "Example: <pre><code>CREATE VIEW vw_SalesSummary WITH SCHEMABINDING AS SELECT ProductID, SUM(Quantity) AS TotalQuantity FROM Sales GROUP BY ProductID; CREATE UNIQUE CLUSTERED INDEX idx_SalesSummary ON vw_SalesSummary (ProductID);</code></pre>"
                        },
                        {
                            question: "12. What is a Non-Clustered Index?",
                            explanation: "A Non-Clustered Index is a type of index where the index structure is separate from the data structure. It provides a logical ordering of the data rows and can improve query performance.",
                            example: "Example: <pre><code>CREATE NONCLUSTERED INDEX idx_EmployeeName ON Employees (LastName);</code></pre>"
                        },
                        {
                            question: "13. What is a Bitmap Index?",
                            explanation: "A Bitmap Index is a type of index that uses bitmaps to quickly locate the rows in a table based on the values in a column.",
                            example: "Example: <pre><code>CREATE BITMAP INDEX idx_Status ON Orders (OrderStatus);</code></pre>"
                        },
                        {
                            question: "14. What is a Hierarchical Query?",
                            explanation: "A Hierarchical Query is used to retrieve data that is organized in a tree-like structure, such as organizational charts or bill of materials.",
                            example: "Example: <pre><code>WITH EmployeeHierarchy AS (SELECT EmployeeID, ManagerID, FirstName FROM Employees WHERE ManagerID IS NULL UNION ALL SELECT e.EmployeeID, e.ManagerID, e.FirstName FROM Employees e INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID) SELECT * FROM EmployeeHierarchy;</code></pre>"
                        },
                        {
                            question: "15. What is a CROSS APPLY operator?",
                            explanation: "The CROSS APPLY operator is used to join each row from the outer table with a table-valued function, returning rows from both tables.",
                            example: "Example: <pre><code>SELECT e.EmployeeID, f.FunctionResult FROM Employees e CROSS APPLY dbo.SomeTableFunction(e.EmployeeID) f;</code></pre>"
                        },
                        {
                            question: "16. What is an OUTER APPLY operator?",
                            explanation: "The OUTER APPLY operator is similar to CROSS APPLY but returns all rows from the outer table and matching rows from the table-valued function.",
                            example: "Example: <pre><code>SELECT e.EmployeeID, f.FunctionResult FROM Employees e OUTER APPLY dbo.SomeTableFunction(e.EmployeeID) f;</code></pre>"
                        },
                        {
                            question: "17. What is the difference between UNION and UNION ALL?",
                            explanation: "UNION combines the result sets of two queries and removes duplicate rows, while UNION ALL combines the result sets and retains all rows, including duplicates.",
                            example: "Example: <pre><code>SELECT FirstName FROM Employees WHERE DeptID = 1 UNION SELECT FirstName FROM Employees WHERE DeptID = 2; -- UNION ALL retains duplicates</code></pre>"
                        },
                        {
                            question: "18. What is a Common Table Expression (CTE)?",
                            explanation: "A CTE provides a way to create a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.",
                            example: "Example: <pre><code>WITH SalesCTE AS (SELECT SalesID, Amount FROM Sales WHERE Amount > 100) SELECT * FROM SalesCTE;</code></pre>"
                        },
                        {
                            question: "19. What is a Temporary Table?",
                            explanation: "A Temporary Table is a table that is only available during the session in which it was created.",
                            example: "Example: <pre><code>CREATE TABLE #TempEmployees (EmployeeID INT, FirstName NVARCHAR(50)); INSERT INTO #TempEmployees VALUES (1, 'John'); SELECT * FROM #TempEmployees;</code></pre>"
                        },
                        {
                            question: "20. What is a Table-Valued Function?",
                            explanation: "A Table-Valued Function returns a table data type and can be used in SELECT statements, JOINs, or other operations.",
                            example: "Example: <pre><code>CREATE FUNCTION dbo.GetEmployeeDetails (@EmployeeID INT) RETURNS TABLE AS RETURN SELECT * FROM Employees WHERE EmployeeID = @EmployeeID;</code></pre>"
                        },
                        {
                            question: "21. What is a Scalar-Valued Function?",
                            explanation: "A Scalar-Valued Function returns a single value, such as an integer or string, rather than a table.",
                            example: "Example: <pre><code>CREATE FUNCTION dbo.GetEmployeeFullName (@EmployeeID INT) RETURNS NVARCHAR(100) AS RETURN (SELECT FirstName + ' ' + LastName FROM Employees WHERE EmployeeID = @EmployeeID);</code></pre>"
                        },
                        {
                            question: "22. What is a Recursive CTE?",
                            explanation: "A Recursive CTE is a Common Table Expression that references itself to perform recursive operations.",
                            example: "Example: <pre><code>WITH RecursiveCTE AS (SELECT EmployeeID, ManagerID FROM Employees WHERE ManagerID IS NULL UNION ALL SELECT e.EmployeeID, e.ManagerID FROM Employees e INNER JOIN RecursiveCTE r ON e.ManagerID = r.EmployeeID) SELECT * FROM RecursiveCTE;</code></pre>"
                        },
                        {
                            question: "23. What is a Window Function?",
                            explanation: "A Window Function performs calculations across a set of table rows related to the current row, often used with the OVER() clause.",
                            example: "Example: <pre><code>SELECT FirstName, Salary, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum FROM Employees;</code></pre>"
                        },
                        {
                            question: "24. What is an Updatable View?",
                            explanation: "An Updatable View allows modifications to be made to the base tables through the view.",
                            example: "Example: <pre><code>CREATE VIEW v_EmployeeView AS SELECT * FROM Employees WHERE DeptID = 1; UPDATE v_EmployeeView SET Salary = Salary + 5000 WHERE EmployeeID = 1;</code></pre>"
                        },
                        {
                            question: "25. What is a Partitioned Table?",
                            explanation: "A Partitioned Table is a table that is divided into smaller, more manageable pieces, yet still treated as a single table.",
                            example: "Example: <pre><code>CREATE PARTITION FUNCTION pfDateRange (DATE) AS RANGE LEFT FOR VALUES ('2024-01-01', '2024-06-30'); CREATE PARTITION SCHEME psDateRange AS PARTITION pfDateRange TO ( [PRIMARY], [SECONDARY]); CREATE TABLE Orders (OrderID INT, OrderDate DATE) ON psDateRange (OrderDate);</code></pre>"
                        },
                        {
                            question: "26. What is a Materialized View?",
                            explanation: "A Materialized View is a database object that contains the results of a query and is physically stored on disk.",
                            example: "Example: <pre><code>CREATE MATERIALIZED VIEW mv_SalarySummary AS SELECT DeptID, AVG(Salary) FROM Employees GROUP BY DeptID;</code></pre>"
                        },
                        {
                            question: "27. What is SQL Injection?",
                            explanation: "SQL Injection is a code injection technique that exploits a vulnerability in an application's software to execute malicious SQL statements.",
                            example: "Example: <pre><code>SELECT * FROM Employees WHERE EmployeeID = @EmployeeID; -- Avoid using concatenated SQL statements to prevent SQL Injection</code></pre>"
                        },
                        {
                            question: "28. What is a Full-Text Search?",
                            explanation: "Full-Text Search allows for sophisticated searching of text data within a database, including finding words and phrases within text columns.",
                            example: "Example: <pre><code>SELECT * FROM Employees WHERE CONTAINS(FirstName, 'John');</code></pre>"
                        },
                        {
                            question: "29. What is a Columnstore Index?",
                            explanation: "A Columnstore Index is a type of index that stores data in columns rather than rows, optimizing performance for analytical queries.",
                            example: "Example: <pre><code>CREATE COLUMNSTORE INDEX idx_EmployeeColumn ON Employees (FirstName, Salary);</code></pre>"
                        },
                        {
                            question: "30. What is Sharding?",
                            explanation: "Sharding is a database architecture pattern where data is distributed across multiple database instances to improve performance and scalability.",
                            example: "Example: <pre><code>Data is divided based on a sharding key, e.g., UserID ranges, and stored in different database shards.</code></pre>"
                        },
                        {
                            question: "31. What is a Common Table Expression (CTE)?",
                            explanation: "A CTE provides a way to create a temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.",
                            example: "Example: <pre><code>WITH SalesCTE AS (SELECT SalesID, Amount FROM Sales WHERE Amount > 100) SELECT * FROM SalesCTE;</code></pre>"
                        },
                        {
                            question: "32. What is a Pivot Query?",
                            explanation: "A Pivot Query transforms rows into columns, summarizing data for better analysis.",
                            example: "Example: <pre><code>PIVOT (SUM(SalesAmount) FOR Month IN ([Jan], [Feb], [Mar])) AS PivotTable;</code></pre>"
                        },
                        {
                            question: "33. What is an Unpivot Query?",
                            explanation: "An Unpivot Query transforms columns into rows, normalizing data for analysis.",
                            example: "Example: <pre><code>UNPIVOT (SalesAmount FOR Month IN ([Jan], [Feb], [Mar])) AS UnpivotTable;</code></pre>"
                        },
                        {
                            question: "34. What is a Derived Table?",
                            explanation: "A Derived Table is a subquery used in the FROM clause that provides a temporary table for the query.",
                            example: "Example: <pre><code>SELECT * FROM (SELECT EmployeeID, Salary FROM Employees WHERE Salary > 50000) AS HighEarners;</code></pre>"
                        },
                        {
                            question: "35. What is a Ranking Function?",
                            explanation: "A Ranking Function assigns a unique rank to each row within a partition of a result set, such as ROW_NUMBER(), RANK(), and DENSE_RANK().",
                            example: "Example: <pre><code>SELECT EmployeeID, Salary, RANK() OVER (ORDER BY Salary DESC) AS SalaryRank FROM Employees;</code></pre>"
                        },
                        {
                            question: "36. What is the difference between RANK() and DENSE_RANK()?",
                            explanation: "RANK() assigns a rank with gaps in the sequence for tied rows, while DENSE_RANK() assigns ranks without gaps.",
                            example: "Example: <pre><code>RANK(): 1, 2, 2, 4; DENSE_RANK(): 1, 2, 2, 3</code></pre>"
                        },
                        {
                            question: "37. What is a Pivot Table?",
                            explanation: "A Pivot Table is a data summarization tool that is used in Excel and other data analysis software to transform and summarize data.",
                            example: "Example: <pre><code>PIVOT (SUM(SalesAmount) FOR Month IN ([Jan], [Feb], [Mar])) AS PivotTable;</code></pre>"
                        },
                        {
                            question: "38. What is a Recursive Query?",
                            explanation: "A Recursive Query is a query that refers to itself, typically used to navigate hierarchical data.",
                            example: "Example: <pre><code>WITH RecursiveCTE AS (SELECT EmployeeID, ManagerID FROM Employees WHERE ManagerID IS NULL UNION ALL SELECT e.EmployeeID, e.ManagerID FROM Employees e INNER JOIN RecursiveCTE r ON e.ManagerID = r.EmployeeID) SELECT * FROM RecursiveCTE;</code></pre>"
                        },
                        {
                            question: "39. What is an Index-Only Scan?",
                            explanation: "An Index-Only Scan is a scan operation where the query can be satisfied using only the index without accessing the table data.",
                            example: "Example: <pre><code>SELECT EmployeeID FROM Employees WHERE LastName = 'Smith'; -- If LastName is indexed, the query may use an Index-Only Scan.</code></pre>"
                        },
                        {
                            question: "40. What is a Covering Index?",
                            explanation: "A Covering Index includes all the columns required by the query, allowing the query to be satisfied using only the index.",
                            example: "Example: <pre><code>CREATE INDEX idx_Covering ON Employees (LastName, FirstName); -- Covers queries needing LastName and FirstName.</code></pre>"
                        },
                        {
                            question: "41. What is a Composite Index?",
                            explanation: "A Composite Index is an index on multiple columns, which improves the performance of queries that filter or sort by those columns.",
                            example: "Example: <pre><code>CREATE INDEX idx_Composite ON Employees (LastName, FirstName);</code></pre>"
                        },
                        {
                            question: "42. What is a Clustered Index?",
                            explanation: "A Clustered Index determines the physical order of data in the table, with the table's rows being sorted according to the index key.",
                            example: "Example: <pre><code>CREATE CLUSTERED INDEX idx_Clustered ON Employees (EmployeeID);</code></pre>"
                        },
                        {
                            question: "43. What is a Non-Clustered Index?",
                            explanation: "A Non-Clustered Index creates a logical ordering of data that is separate from the physical order, and it points to the actual data rows.",
                            example: "Example: <pre><code>CREATE NONCLUSTERED INDEX idx_NonClustered ON Employees (LastName);</code></pre>"
                        },
                        {
                            question: "44. What is an Execution Plan?",
                            explanation: "An Execution Plan shows the steps that SQL Server takes to execute a query, including index usage and joins.",
                            example: "Example: <pre><code>Use the SQL Server Management Studio to view the execution plan for a query to understand its performance characteristics.</code></pre>"
                        },
                        {
                            question: "45. What is a Query Execution Plan?",
                            explanation: "A Query Execution Plan is a detailed breakdown of how SQL Server executes a query, including the order of operations and data access methods.",
                            example: "Example: <pre><code>EXPLAIN SELECT * FROM Employees WHERE EmployeeID = 1; -- Provides the query execution plan for analyzing performance.</code></pre>"
                        },
                        {
                            question: "46. What is a Data Dictionary?",
                            explanation: "A Data Dictionary provides metadata about the database schema, including tables, columns, and relationships.",
                            example: "Example: <pre><code>SELECT * FROM INFORMATION_SCHEMA.TABLES; -- Retrieves metadata about tables in the database.</code></pre>"
                        },
                        {
                            question: "47. What is a Self-Join?",
                            explanation: "A Self-Join is a join operation where a table is joined with itself, often used to compare rows within the same table.",
                            example: "Example: <pre><code>SELECT e1.EmployeeID, e1.ManagerID, e2.EmployeeID AS ManagerID FROM Employees e1 INNER JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;</code></pre>"
                        },
                        {
                            question: "48. What is a Cross Join?",
                            explanation: "A Cross Join returns the Cartesian product of two tables, resulting in a combination of every row in one table with every row in the other.",
                            example: "Example: <pre><code>SELECT * FROM Employees CROSS JOIN Departments;</code></pre>"
                        },
                        {
                            question: "49. What is a Natural Join?",
                            explanation: "A Natural Join automatically joins tables based on columns with the same name in both tables.",
                            example: "Example: <pre><code>SELECT * FROM Employees NATURAL JOIN Departments;</code></pre>"
                        },
                        {
                            question: "50. What is an Aggregation Function?",
                            explanation: "An Aggregation Function performs a calculation on a set of values and returns a single value, such as SUM(), AVG(), MIN(), and MAX().",
                            example: "Example: <pre><code>SELECT DeptID, AVG(Salary) AS AvgSalary FROM Employees GROUP BY DeptID;</code></pre>"
                        }
            ]
        }
    ];

    const section = document.getElementById('query-section');

    queries.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('card');

        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('card-header');
        categoryHeader.textContent = category.title;
        categoryHeader.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });

        const categoryContent = document.createElement('div');
        categoryContent.classList.add('card-content');

        category.questions.forEach(q => {
            const questionCard = document.createElement('div');
            questionCard.classList.add('card');

            const questionHeader = document.createElement('div');
            questionHeader.classList.add('card-header');
            questionHeader.textContent = q.question;
            questionHeader.addEventListener('click', function () {
                const content = this.nextElementSibling;
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            });

            const questionContent = document.createElement('div');
            questionContent.classList.add('card-content');
            questionContent.innerHTML = `<p>${q.explanation}</p>${q.example}`;

            questionCard.appendChild(questionHeader);
            questionCard.appendChild(questionContent);
            categoryContent.appendChild(questionCard);
        });

        categoryCard.appendChild(categoryHeader);
        categoryCard.appendChild(categoryContent);
        section.appendChild(categoryCard);
    });
});
