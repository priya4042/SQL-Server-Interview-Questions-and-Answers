// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const queries = [
            {
                id: 1,
                title: '1. Basic SELECT Query',
                explanation: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table, sometimes called the result set.',
                example: `SELECT * FROM Employees;`
            },
            {
                id: 2,
                title: '2. SELECT with WHERE Clause',
                explanation: 'The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.',
                example: `SELECT * FROM Employees WHERE Department = 'HR';`
            },
            {
                id: 3,
                title: '3. SELECT with ORDER BY Clause',
                explanation: 'The ORDER BY clause is used to sort the result set in either ascending or descending order.',
                example: `SELECT * FROM Employees ORDER BY LastName ASC;`
            },
            {
                id: 4,
                title: '4. SELECT with GROUP BY Clause',
                explanation: 'The GROUP BY clause is used to group rows that have the same values into summary rows.',
                example: `SELECT Department, COUNT(*) FROM Employees GROUP BY Department;`
            },
            {
                id: 5,
                title: '5. SELECT with HAVING Clause',
                explanation: 'The HAVING clause is used to filter groups of records based on a condition, often used with GROUP BY.',
                example: `SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 10;`
            },
            {
                id: 6,
                title: '6. SELECT with JOIN',
                explanation: 'A JOIN clause is used to combine rows from two or more tables based on a related column between them.',
                example: `SELECT Employees.Name, Departments.DepartmentName
                          FROM Employees
                          JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;`
            },
            {
                id: 7,
                title: '7. INNER JOIN',
                explanation: 'INNER JOIN returns records that have matching values in both tables.',
                example: `SELECT Orders.OrderID, Customers.CustomerName
                          FROM Orders
                          INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
            },
            {
                id: 8,
                title: '8. LEFT JOIN',
                explanation: 'LEFT JOIN returns all records from the left table and the matched records from the right table. Non-matching records from the right table will have NULL values.',
                example: `SELECT Customers.CustomerName, Orders.OrderID
                          FROM Customers
                          LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`
            },
            {
                id: 9,
                title: '9. RIGHT JOIN',
                explanation: 'RIGHT JOIN returns all records from the right table and the matched records from the left table. Non-matching records from the left table will have NULL values.',
                example: `SELECT Orders.OrderID, Customers.CustomerName
                          FROM Orders
                          RIGHT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
            },
            {
                id: 10,
                title: '10. FULL JOIN',
                explanation: 'FULL JOIN returns all records when there is a match in either left or right table. Non-matching rows from both tables will have NULL values.',
                example: `SELECT Customers.CustomerName, Orders.OrderID
                          FROM Customers
                          FULL JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`
            },
            {
                id: 11,
                title: '11. CROSS JOIN',
                explanation: 'CROSS JOIN returns the Cartesian product of two tables, i.e., it combines each row from the first table with each row from the second table.',
                example: `SELECT Employees.Name, Departments.DepartmentName
                          FROM Employees
                          CROSS JOIN Departments;`
            },
            {
                id: 12,
                title: '12. UNION',
                explanation: 'UNION combines the results of two or more SELECT statements into a single result set. All SELECT statements must have the same number of columns in the result sets with similar data types.',
                example: `SELECT City FROM Customers
                          UNION
                          SELECT City FROM Suppliers;`
            },
            {
                id: 13,
                title: '13. UNION ALL',
                explanation: 'UNION ALL combines the results of two or more SELECT statements into a single result set and includes duplicates.',
                example: `SELECT City FROM Customers
                          UNION ALL
                          SELECT City FROM Suppliers;`
            },
            {
                id: 14,
                title: '14. INSERT INTO Statement',
                explanation: 'The INSERT INTO statement is used to insert new records into a table.',
                example: `INSERT INTO Employees (Name, Department, Salary)
                          VALUES ('John Doe', 'HR', 50000);`
            },
            {
                id: 15,
                title: '15. INSERT INTO SELECT Statement',
                explanation: 'The INSERT INTO SELECT statement is used to insert records into a table based on the result of a SELECT statement.',
                example: `INSERT INTO Employees (Name, Department)
                          SELECT Name, Department
                          FROM NewEmployees;`
            },
            {
                id: 16,
                title: '16. UPDATE Statement',
                explanation: 'The UPDATE statement is used to modify existing records in a table.',
                example: `UPDATE Employees
                          SET Salary = 55000
                          WHERE Name = 'John Doe';`
            },
            {
                id: 17,
                title: '17. DELETE Statement',
                explanation: 'The DELETE statement is used to delete existing records from a table.',
                example: `DELETE FROM Employees
                          WHERE Name = 'John Doe';`
            },
            {
                id: 18,
                title: '18. CREATE TABLE Statement',
                explanation: 'The CREATE TABLE statement is used to create a new table in the database.',
                example: `CREATE TABLE Employees (
                              EmployeeID INT PRIMARY KEY,
                              Name NVARCHAR(100),
                              Department NVARCHAR(50),
                              Salary DECIMAL(10, 2)
                          );`
            },
            {
                id: 19,
                title: '19. ALTER TABLE Statement',
                explanation: 'The ALTER TABLE statement is used to modify an existing table structure, such as adding or deleting columns.',
                example: `ALTER TABLE Employees
                          ADD DateOfJoining DATE;`
            },
            {
                id: 20,
                title: '20. DROP TABLE Statement',
                explanation: 'The DROP TABLE statement is used to delete an existing table and its data from the database.',
                example: `DROP TABLE Employees;`
            },
            {
                id: 21,
                title: '21. CREATE VIEW Statement',
                explanation: 'The CREATE VIEW statement is used to create a virtual table based on the result of a SELECT query.',
                example: `CREATE VIEW EmployeeView AS
                          SELECT Name, Department
                          FROM Employees
                          WHERE Salary > 50000;`
            },
            {
                id: 22,
                title: '22. DROP VIEW Statement',
                explanation: 'The DROP VIEW statement is used to delete a view from the database.',
                example: `DROP VIEW EmployeeView;`
            },
            {
                id: 23,
                title: '23. CREATE INDEX Statement',
                explanation: 'The CREATE INDEX statement is used to create an index (a performance-tuning method) on a table column.',
                example: `CREATE INDEX idx_EmployeeName
                          ON Employees (Name);`
            },
            {
                id: 24,
                title: '24. DROP INDEX Statement',
                explanation: 'The DROP INDEX statement is used to delete an existing index from a table.',
                example: `DROP INDEX idx_EmployeeName ON Employees;`
            },
            {
                id: 25,
                title: '25. CREATE PROCEDURE Statement',
                explanation: 'The CREATE PROCEDURE statement is used to create a stored procedure, which is a set of SQL statements that can be executed as a single unit.',
                example: `CREATE PROCEDURE GetEmployeeByID
                          @EmployeeID INT
                          AS
                          BEGIN
                              SELECT * FROM Employees
                              WHERE EmployeeID = @EmployeeID;
                          END;`
            },
            {
                id: 26,
                title: '26. EXECUTE Stored Procedure',
                explanation: 'The EXECUTE statement is used to run a stored procedure.',
                example: `EXEC GetEmployeeByID @EmployeeID = 1;`
            },
            {
                id: 27,
                title: '27. CREATE FUNCTION Statement',
                explanation: 'The CREATE FUNCTION statement is used to create a user-defined function, which returns a single value or a table.',
                example: `CREATE FUNCTION GetEmployeeName (@EmployeeID INT)
                          RETURNS NVARCHAR(100)
                          AS
                          BEGIN
                              DECLARE @Name NVARCHAR(100);
                              SELECT @Name = Name
                              FROM Employees
                              WHERE EmployeeID = @EmployeeID;
                              RETURN @Name;
                          END;`
            },
            {
                id: 28,
                title: '28. EXECUTE User-Defined Function',
                explanation: 'User-defined functions can be executed within queries or other SQL statements.',
                example: `SELECT dbo.GetEmployeeName(1);`
            },
            {
                id: 29,
                title: '29. CREATE TRIGGER Statement',
                explanation: 'The CREATE TRIGGER statement is used to create a trigger, which automatically performs a specified action when a certain event occurs in the database.',
                example: `CREATE TRIGGER trg_UpdateEmployee
                          ON Employees
                          AFTER UPDATE
                          AS
                          BEGIN
                              INSERT INTO AuditLog (ChangeDate, EmployeeID, NewSalary)
                              SELECT GETDATE(), EmployeeID, Salary
                              FROM inserted;
                          END;`
            },
            {
                id: 30,
                title: '30. DROP TRIGGER Statement',
                explanation: 'The DROP TRIGGER statement is used to delete an existing trigger from a table.',
                example: `DROP TRIGGER trg_UpdateEmployee;`
            },
            {
                id: 31,
                title: '31. CREATE DATABASE Statement',
                explanation: 'The CREATE DATABASE statement is used to create a new database.',
                example: `CREATE DATABASE CompanyDB;`
            },
            {
                id: 32,
                title: '32. DROP DATABASE Statement',
                explanation: 'The DROP DATABASE statement is used to delete an existing database and its contents.',
                example: `DROP DATABASE CompanyDB;`
            },
            {
                id: 33,
                title: '33. USE Statement',
                explanation: 'The USE statement is used to select a specific database to work with.',
                example: `USE CompanyDB;`
            },
            {
                id: 34,
                title: '34. RENAME TABLE Statement',
                explanation: 'SQL Server does not have a direct RENAME TABLE statement. Instead, you use sp_rename to change the table name.',
                example: `EXEC sp_rename 'OldTableName', 'NewTableName';`
            },
            {
                id: 35,
                title: '35. ADD COLUMN to Table',
                explanation: 'The ALTER TABLE statement with ADD COLUMN is used to add a new column to an existing table.',
                example: `ALTER TABLE Employees
                          ADD PhoneNumber NVARCHAR(20);`
            },
            {
                id: 36,
                title: '36. DROP COLUMN from Table',
                explanation: 'The ALTER TABLE statement with DROP COLUMN is used to delete a column from an existing table.',
                example: `ALTER TABLE Employees
                          DROP COLUMN PhoneNumber;`
            },
            {
                id: 37,
                title: '37. ALTER COLUMN Data Type',
                explanation: 'The ALTER TABLE statement can be used to change the data type of a column in an existing table.',
                example: `ALTER TABLE Employees
                          ALTER COLUMN Salary DECIMAL(12, 2);`
            },
            {
                id: 38,
                title: '38. CHECK Constraint',
                explanation: 'The CHECK constraint is used to limit the value range that can be placed in a column.',
                example: `ALTER TABLE Employees
                          ADD CONSTRAINT chk_Salary CHECK (Salary > 0);`
            },
            {
                id: 39,
                title: '39. DEFAULT Constraint',
                explanation: 'The DEFAULT constraint is used to provide a default value for a column when no value is specified.',
                example: `ALTER TABLE Employees
                          ADD CONSTRAINT df_Department DEFAULT ('IT') FOR Department;`
            },
            {
                id: 40,
                title: '40. PRIMARY KEY Constraint',
                explanation: 'The PRIMARY KEY constraint is used to uniquely identify each record in a table.',
                example: `ALTER TABLE Employees
                          ADD CONSTRAINT pk_EmployeeID PRIMARY KEY (EmployeeID);`
            },
            {
                id: 41,
                title: '41. FOREIGN KEY Constraint',
                explanation: 'The FOREIGN KEY constraint is used to enforce a link between the data in two tables.',
                example: `ALTER TABLE Orders
                          ADD CONSTRAINT fk_CustomerID FOREIGN KEY (CustomerID)
                          REFERENCES Customers(CustomerID);`
            },
            {
                id: 42,
                title: '42. UNIQUE Constraint',
                explanation: 'The UNIQUE constraint ensures that all values in a column are unique.',
                example: `ALTER TABLE Employees
                          ADD CONSTRAINT uq_Email UNIQUE (Email);`
            },
            {
                id: 43,
                title: '43. ALTER DATABASE Statement',
                explanation: 'The ALTER DATABASE statement is used to modify the properties of an existing database.',
                example: `ALTER DATABASE CompanyDB
                          SET RECOVERY FULL;`
            },
            {
                    id: 44,
                    title: '44. BACKUP DATABASE Statement',
                    explanation: 'The BACKUP DATABASE statement is used to create a backup of a database.',
                    example: `BACKUP DATABASE CompanyDB
                              TO DISK = 'C:\\Backup\\CompanyDB.bak';`
        },
        {
            id: 45,
            title: '45. RESTORE DATABASE Statement',
            explanation: 'The RESTORE DATABASE statement is used to restore a database from a backup.',
            example: `RESTORE DATABASE CompanyDB
                      FROM DISK = 'C:\\Backup\\CompanyDB.bak';`
        },
        {
            id: 46,
            title: '46. CREATE USER Statement',
            explanation: 'The CREATE USER statement is used to create a new user in the database.',
            example: `CREATE USER JohnDoe FOR LOGIN JohnDoeLogin;`
        },
        {
            id: 47,
            title: '47. DROP USER Statement',
            explanation: 'The DROP USER statement is used to delete an existing user from the database.',
            example: `DROP USER JohnDoe;`
        },
        {
            id: 48,
            title: '48. CREATE LOGIN Statement',
            explanation: 'The CREATE LOGIN statement is used to create a new login for SQL Server.',
            example: `CREATE LOGIN JohnDoeLogin WITH PASSWORD = 'SecurePassword123';`
        },
        {
            id: 49,
            title: '49. DROP LOGIN Statement',
            explanation: 'The DROP LOGIN statement is used to delete an existing login from SQL Server.',
            example: `DROP LOGIN JohnDoeLogin;`
        },
        {
            id: 50,
            title: '50. GRANT Permission',
            explanation: 'The GRANT statement is used to give permissions to users or roles.',
            example: `GRANT SELECT ON Employees TO JohnDoe;`
        },
        {
            id: 51,
            title: '51. REVOKE Permission',
            explanation: 'The REVOKE statement is used to remove permissions from users or roles.',
            example: `REVOKE SELECT ON Employees FROM JohnDoe;`
        },
        {
            id: 52,
            title: '52. DENY Permission',
            explanation: 'The DENY statement is used to explicitly deny permissions to users or roles.',
            example: `DENY SELECT ON Employees TO JohnDoe;`
        },
        {
            id: 53,
            title: '53. SET IDENTITY_INSERT',
            explanation: 'The SET IDENTITY_INSERT statement is used to insert explicit values into the identity column of a table.',
            example: `SET IDENTITY_INSERT Employees ON;
                      INSERT INTO Employees (EmployeeID, Name, Department)
                      VALUES (1, 'Jane Doe', 'Finance');
                      SET IDENTITY_INSERT Employees OFF;`
        },
        {
            id: 54,
            title: '54. EXEC sp_executesql',
            explanation: 'The sp_executesql system stored procedure is used to execute a dynamically built SQL statement.',
            example: `DECLARE @SQL NVARCHAR(MAX);
                      SET @SQL = N'SELECT * FROM Employees WHERE Department = @Dept';
                      EXEC sp_executesql @SQL, N'@Dept NVARCHAR(50)', @Dept = 'HR';`
        },
        {
            id: 55,
            title: '55. Use of Common Table Expressions (CTE)',
            explanation: 'A Common Table Expression (CTE) provides a way to write auxiliary statements for use in a SELECT, INSERT, UPDATE, or DELETE statement.',
            example: `WITH EmployeeCTE AS (
                          SELECT Name, Department
                          FROM Employees
                          WHERE Salary > 50000
                      )
                      SELECT * FROM EmployeeCTE;`
        },
        {
            id: 56,
            title: '56. ROW_NUMBER Function',
            explanation: 'The ROW_NUMBER function assigns a unique sequential integer to rows within a partition of a result set.',
            example: `SELECT Name, Salary,
                            ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
                      FROM Employees;`
        },
        {
            id: 57,
            title: '57. RANK Function',
            explanation: 'The RANK function assigns a rank to each row within a partition of a result set, with gaps in ranking when there are ties.',
            example: `SELECT Name, Salary,
                            RANK() OVER (ORDER BY Salary DESC) AS Rank
                      FROM Employees;`
        },
        {
            id: 58,
            title: '58. DENSE_RANK Function',
            explanation: 'The DENSE_RANK function assigns ranks to rows within a partition of a result set, without gaps in ranking when there are ties.',
            example: `SELECT Name, Salary,
                            DENSE_RANK() OVER (ORDER BY Salary DESC) AS DenseRank
                      FROM Employees;`
        },
        {
            id: 59,
            title: '59. NTILE Function',
            explanation: 'The NTILE function divides the result set into a specified number of roughly equal parts or "tiles".',
            example: `SELECT Name, Salary,
                            NTILE(4) OVER (ORDER BY Salary DESC) AS Quartile
                      FROM Employees;`
        },
        {
            id: 60,
            title: '60. PIVOT Operator',
            explanation: 'The PIVOT operator is used to rotate table data to provide a more readable format for analysis.',
            example: `SELECT *
                      FROM (SELECT Year, Quarter, Revenue
                            FROM Sales) AS SourceTable
                      PIVOT (SUM(Revenue)
                            FOR Quarter IN ([Q1], [Q2], [Q3], [Q4])) AS PivotTable;`
        },
        {
            id: 61,
            title: '61. UNPIVOT Operator',
            explanation: 'The UNPIVOT operator is used to transform columns into rows, effectively reversing the PIVOT operation.',
            example: `SELECT Year, Quarter, Revenue
                      FROM (SELECT Year, [Q1], [Q2], [Q3], [Q4]
                            FROM SalesPivot) AS PivotTable
                      UNPIVOT (Revenue FOR Quarter IN ([Q1], [Q2], [Q3], [Q4])) AS UnpivotTable;`
        },
        {
            id: 62,
            title: '62. CROSS APPLY Operator',
            explanation: 'The CROSS APPLY operator is used to join a table with a table-valued function, allowing you to use the results of the function as a derived table.',
            example: `SELECT e.Name, d.Department
                      FROM Employees e
                      CROSS APPLY dbo.GetDepartmentDetails(e.DepartmentID) d;`
        },
        {
            id: 63,
            title: '63. OUTER APPLY Operator',
            explanation: 'The OUTER APPLY operator is similar to CROSS APPLY but returns all rows from the left table, including rows with no match from the right table.',
            example: `SELECT e.Name, d.Department
                      FROM Employees e
                      OUTER APPLY dbo.GetDepartmentDetails(e.DepartmentID) d;`
        },
        {
            id: 64,
            title: '64. MERGE Statement',
            explanation: 'The MERGE statement is used to insert, update, or delete records in a target table based on matching records in a source table.',
            example: `MERGE INTO TargetTable AS target
                      USING SourceTable AS source
                      ON target.ID = source.ID
                      WHEN MATCHED THEN
                          UPDATE SET target.Value = source.Value
                      WHEN NOT MATCHED THEN
                          INSERT (ID, Value) VALUES (source.ID, source.Value)
                      WHEN NOT MATCHED BY SOURCE THEN
                          DELETE;`
        },
        {
            id: 65,
            title: '65. OUTPUT Clause',
            explanation: 'The OUTPUT clause is used to return information from DML statements such as INSERT, UPDATE, DELETE, or MERGE.',
            example: `MERGE INTO TargetTable AS target
                      USING SourceTable AS source
                      ON target.ID = source.ID
                      WHEN MATCHED THEN
                          UPDATE SET target.Value = source.Value
                      WHEN NOT MATCHED THEN
                          INSERT (ID, Value) VALUES (source.ID, source.Value)
                      OUTPUT $action, inserted.ID, inserted.Value;`
        },
        {
            id: 66,
            title: '66. TABLE Variables',
            explanation: 'TABLE variables are used to store a temporary result set for use within a batch, stored procedure, or function.',
            example: `DECLARE @TempTable TABLE (
                          ID INT PRIMARY KEY,
                          Name NVARCHAR(50)
                      );
                      INSERT INTO @TempTable (ID, Name)
                      VALUES (1, 'John Doe');`
        },
        {
            id: 67,
            title: '67. Temporary Tables',
            explanation: 'Temporary tables are used to store intermediate results temporarily, and they are automatically dropped at the end of the session or when no longer needed.',
            example: `CREATE TABLE #TempTable (
                          ID INT PRIMARY KEY,
                          Name NVARCHAR(50)
                      );
                      INSERT INTO #TempTable (ID, Name)
                      VALUES (1, 'John Doe');`
        },
        {
            id: 68,
            title: '68. Common Table Expressions (CTE) with Recursive Queries',
            explanation: 'CTEs can be used for recursive queries to traverse hierarchical data structures.',
            example: `WITH RecursiveCTE AS (
                          SELECT ID, ParentID, Name
                          FROM Categories
                          WHERE ParentID IS NULL
                          UNION ALL
                          SELECT c.ID, c.ParentID, c.Name
                          FROM Categories c
                          INNER JOIN RecursiveCTE r ON c.ParentID = r.ID
                      )
                      SELECT * FROM RecursiveCTE;`
        },
        {
            id: 69,
            title: '69. SQL Profiler',
            explanation: 'SQL Profiler is a tool for monitoring and analyzing SQL Server events.',
            example: `-- SQL Profiler is a graphical tool. Use SQL Server Management Studio (SSMS) to start SQL Profiler from the Tools menu.`
        },
        {
            id: 70,
            title: '70. SQL Server Management Studio (SSMS) Setup',
            explanation: 'SQL Server Management Studio (SSMS) is a tool used to manage SQL Server databases.',
            example: `-- SQL Server Management Studio (SSMS) is a graphical tool. Use the setup wizard to install and configure SSMS.`
        },
        {
            id: 71,
            title: '71. SQL Server Agent Jobs',
            explanation: 'SQL Server Agent Jobs are used to automate administrative tasks in SQL Server.',
            example: `-- SQL Server Agent Jobs are created and managed using SQL Server Management Studio (SSMS).`
        },
        {
            id: 72,
            title: '72. SQL Server Maintenance Plans',
            explanation: 'SQL Server Maintenance Plans are used to automate routine database maintenance tasks.',
            example: `-- SQL Server Maintenance Plans are created and managed using SQL Server Management Studio (SSMS).`
        },
        {
            id: 73,
            title: '73. SQL Server Integration Services (SSIS)',
            explanation: 'SQL Server Integration Services (SSIS) is used for data extraction, transformation, and loading (ETL).',
            example: `-- SSIS is used through SQL Server Data Tools (SSDT) for designing ETL processes.`
        },
        {
            id: 74,
            title: '74. SQL Server Reporting Services (SSRS)',
            explanation: 'SQL Server Reporting Services (SSRS) is used for designing and managing reports.',
            example: `-- SSRS is used through SQL Server Data Tools (SSDT) and Report Manager.`
        },
        {
            id: 75,
            title: '75. SQL Server Analysis Services (SSAS)',
            explanation: 'SQL Server Analysis Services (SSAS) is used for data analysis and business intelligence.',
            example: `-- SSAS is used through SQL Server Data Tools (SSDT) for designing data models and cubes.`
        },
        {
            id: 76,
            title: '76. Data Types in SQL Server',
            explanation: 'SQL Server provides various data types to define the type of data that can be stored in a column.',
            example: `-- Common data types include INT, VARCHAR, DATE, and DATETIME.`
        },
        {
            id: 77,
            title: '77. NULL Handling in SQL Server',
            explanation: 'Handling NULL values properly is important in SQL Server to avoid incorrect results in queries.',
            example: `SELECT ISNULL(Salary, 0) AS Salary
                      FROM Employees;`
        },
        {
            id: 78,
            title: '78. String Functions in SQL Server',
            explanation: 'SQL Server provides various string functions to manipulate and query string data.',
            example: `SELECT LEN(Name) AS NameLength
                      FROM Employees;`
        },
        {
            id: 79,
            title: '79. Date and Time Functions in SQL Server',
            explanation: 'SQL Server provides functions to handle and manipulate date and time data.',
            example: `SELECT GETDATE() AS CurrentDateTime;`
        },
        {
            id: 80,
            title: '80. Mathematical Functions in SQL Server',
            explanation: 'SQL Server provides functions to perform mathematical calculations.',
            example: `SELECT ABS(-100) AS AbsoluteValue;`
        },
        {
            id: 81,
            title: '81. Aggregate Functions in SQL Server',
            explanation: 'Aggregate functions perform a calculation on a set of values and return a single value.',
            example: `SELECT AVG(Salary) AS AverageSalary
                      FROM Employees;`
        },
        {
            id: 82,
            title: '82. Conditional Logic in SQL Server',
            explanation: 'Conditional logic in SQL Server is handled using the CASE statement.',
            example: `SELECT Name,
                            CASE 
                                WHEN Salary > 50000 THEN 'High'
                                ELSE 'Low'
                            END AS SalaryCategory
                      FROM Employees;`
        },
        {
            id: 83,
            title: '83. Subqueries in SQL Server',
            explanation: 'Subqueries are nested queries used to retrieve data based on the result of another query.',
            example: `SELECT Name
                      FROM Employees
                      WHERE Salary > (SELECT AVG(Salary) FROM Employees);`
        },
        {
            id: 84,
            title: '84. EXISTS Operator',
            explanation: 'The EXISTS operator is used to check the existence of rows in a subquery.',
            example: `SELECT Name
                      FROM Employees
                      WHERE EXISTS (SELECT 1 FROM Departments WHERE Departments.ID = Employees.DepartmentID);`
        },
        {
            id: 85,
            title: '85. IN Operator',
            explanation: 'The IN operator is used to specify multiple possible values for a column.',
            example: `SELECT Name
                      FROM Employees
                      WHERE DepartmentID IN (1, 2, 3);`
        },

        {
            id: 86,
            title: '86. NOT IN Operator',
            explanation: 'The NOT IN operator is used to exclude multiple possible values for a column.',
            example: `SELECT Name
                      FROM Employees
                      WHERE DepartmentID NOT IN (1, 2, 3);`
        },
        {
            id: 87,
            title: '87. BETWEEN Operator',
            explanation: 'The BETWEEN operator is used to filter the result set within a range of values.',
            example: `SELECT Name
                      FROM Employees
                      WHERE Salary BETWEEN 40000 AND 60000;`
        },
        {
            id: 88,
            title: '88. LIKE Operator',
            explanation: 'The LIKE operator is used to search for a specified pattern in a column.',
            example: `SELECT Name
                      FROM Employees
                      WHERE Name LIKE 'J%';`
        },
        {
            id: 89,
            title: '89. DISTINCT Keyword',
            explanation: 'The DISTINCT keyword is used to return unique values in a result set.',
            example: `SELECT DISTINCT DepartmentID
                      FROM Employees;`
        },
        {
            id: 90,
            title: '90. TOP Clause',
            explanation: 'The TOP clause is used to specify the number of rows to return in a query.',
            example: `SELECT TOP 10 Name
                      FROM Employees
                      ORDER BY Salary DESC;`
        },
        {
            id: 91,
            title: '91. OFFSET-FETCH Clause',
            explanation: 'The OFFSET-FETCH clause is used for paging through a result set by specifying the number of rows to skip and fetch.',
            example: `SELECT Name
                      FROM Employees
                      ORDER BY Salary
                      OFFSET 10 ROWS
                      FETCH NEXT 10 ROWS ONLY;`
        },
        {
            id: 92,
            title: '92. Union vs Union All',
            explanation: 'UNION removes duplicate rows from the result set, while UNION ALL includes all rows, even duplicates.',
            example: `SELECT Name FROM Employees
                      UNION
                      SELECT Name FROM Contractors
                      
                      SELECT Name FROM Employees
                      UNION ALL
                      SELECT Name FROM Contractors;`
        },
        {
            id: 93,
            title: '93. INNER JOIN vs LEFT JOIN',
            explanation: 'INNER JOIN returns rows when there is a match in both tables, while LEFT JOIN returns all rows from the left table, and matched rows from the right table.',
            example: `SELECT e.Name, d.Department
                      FROM Employees e
                      INNER JOIN Departments d ON e.DepartmentID = d.ID
                      
                      SELECT e.Name, d.Department
                      FROM Employees e
                      LEFT JOIN Departments d ON e.DepartmentID = d.ID;`
        },
        {
            id: 94,
            title: '94. LEFT JOIN vs RIGHT JOIN',
            explanation: 'LEFT JOIN returns all rows from the left table, and matched rows from the right table, while RIGHT JOIN returns all rows from the right table, and matched rows from the left table.',
            example: `SELECT e.Name, d.Department
                      FROM Employees e
                      LEFT JOIN Departments d ON e.DepartmentID = d.ID
                      
                      SELECT e.Name, d.Department
                      FROM Employees e
                      RIGHT JOIN Departments d ON e.DepartmentID = d.ID;`
        },
        {
            id: 95,
            title: '95. Self Join',
            explanation: 'A Self Join is a regular join but the table is joined with itself.',
            example: `SELECT e1.Name AS EmployeeName, e2.Name AS ManagerName
                      FROM Employees e1
                      INNER JOIN Employees e2 ON e1.ManagerID = e2.ID;`
        },
        {
            id: 96,
            title: '96. CROSS JOIN',
            explanation: 'A CROSS JOIN returns the Cartesian product of the two tables, i.e., it returns all possible combinations of rows from both tables.',
            example: `SELECT e.Name, d.Department
                      FROM Employees e
                      CROSS JOIN Departments d;`
        },
        {
            id: 97,
            title: '97. UNION vs UNION ALL vs INTERSECT vs EXCEPT',
            explanation: 'UNION removes duplicates, UNION ALL includes all rows, INTERSECT returns common rows, and EXCEPT returns rows from the first query not found in the second query.',
            example: `SELECT Name FROM Employees
                      UNION
                      SELECT Name FROM Contractors
                      
                      SELECT Name FROM Employees
                      UNION ALL
                      SELECT Name FROM Contractors
                      
                      SELECT Name FROM Employees
                      INTERSECT
                      SELECT Name FROM Contractors
                      
                      SELECT Name FROM Employees
                      EXCEPT
                      SELECT Name FROM Contractors;`
        },
        {
            id: 98,
            title: '98. String Aggregation (STRING_AGG)',
            explanation: 'STRING_AGG is used to concatenate values from multiple rows into a single string with a specified delimiter.',
            example: `SELECT DepartmentID, STRING_AGG(Name, ', ') AS Employees
                      FROM Employees
                      GROUP BY DepartmentID;`
        },
        {
            id: 99,
            title: '99. PIVOT Operator',
            explanation: 'The PIVOT operator is used to transform rows into columns, effectively reversing the UNPIVOT operation.',
            example: `SELECT Year, [Q1], [Q2], [Q3], [Q4]
                      FROM (SELECT Year, Quarter, Revenue
                            FROM SalesData) AS SourceTable
                      PIVOT (SUM(Revenue) FOR Quarter IN ([Q1], [Q2], [Q3], [Q4])) AS PivotTable;`
        },
        {
            id: 100,
            title: '100. Handling XML Data',
            explanation: 'SQL Server provides methods to handle XML data, such as the XML data type and XML methods like .value(), .query(), and .nodes().',
            example: `DECLARE @xml XML = '<Employees><Employee ID="1"><Name>John Doe</Name></Employee></Employees>';
                      SELECT @xml.value('(/Employees/Employee/Name)[1]', 'NVARCHAR(50)') AS EmployeeName;`
        },
        {
            id: 101,
            title: '101. Working with JSON Data',
            explanation: 'SQL Server supports JSON data manipulation with functions like JSON_VALUE(), JSON_QUERY(), and JSON_MODIFY().',
            example: `DECLARE @json NVARCHAR(MAX) = '{"Name": "John Doe", "Age": 30}';
                      SELECT JSON_VALUE(@json, '$.Name') AS Name;`
        },
        {
            id: 102,
            title: '102. ERROR Handling with TRY...CATCH',
            explanation: 'The TRY...CATCH construct is used to handle errors in SQL Server, allowing you to define actions to take when an error occurs.',
            example: `BEGIN TRY
                          -- Code that might cause an error
                          SELECT 1 / 0;
                      END TRY
                      BEGIN CATCH
                          -- Code to handle the error
                          SELECT ERROR_MESSAGE() AS ErrorMessage;
                      END CATCH;`
        },
        {
            id: 103,
            title: '103. Transactions and COMMIT/ROLLBACK',
            explanation: 'Transactions are used to ensure data integrity by grouping multiple operations into a single unit. COMMIT saves changes, while ROLLBACK undoes them.',
            example: `BEGIN TRANSACTION;
                      BEGIN TRY
                          INSERT INTO Employees (Name, DepartmentID) VALUES ('Jane Doe', 1);
                          -- More operations
                          COMMIT;
                      END TRY
                      BEGIN CATCH
                          ROLLBACK;
                          SELECT ERROR_MESSAGE() AS ErrorMessage;
                      END CATCH;`
        },
        {
            id: 104,
            title: '104. Table Partitioning',
            explanation: 'Table partitioning is used to divide a large table into smaller, more manageable pieces while maintaining the table as a single entity.',
            example: `-- Example for partitioning a table based on range
                      CREATE PARTITION FUNCTION MyPartitionFunction (INT) 
                      AS RANGE LEFT FOR VALUES (1, 100, 200, 300);
                      
                      CREATE PARTITION SCHEME MyPartitionScheme 
                      AS PARTITION MyPartitionFunction ALL TO ([PRIMARY]);
                      
                      CREATE TABLE Employees (
                          ID INT PRIMARY KEY,
                          Name NVARCHAR(50),
                          Salary INT
                      ) ON MyPartitionScheme (ID);`
        },
        {
            id: 105,
            title: '105. Indexes',
            explanation: 'Indexes are used to improve the speed of data retrieval operations on a table at the cost of additional storage and slower write operations.',
            example: `CREATE INDEX IX_Employees_Name
                      ON Employees (Name);`
        },
        {
            id: 106,
            title: '106. Full-Text Search',
            explanation: 'Full-text search allows you to search for text data in SQL Server using specialized indexing and querying capabilities.',
            example: `-- Create a full-text index
                      CREATE FULLTEXT CATALOG MyCatalog AS DEFAULT;
                      CREATE FULLTEXT INDEX ON Employees (Name)
                      KEY INDEX PK_Employees;`
        },
        {
            id: 107,
            title: '107. View Creation',
            explanation: 'Views are virtual tables that provide a way to simplify complex queries and present data in a specific format.',
            example: `CREATE VIEW EmployeeView AS
                      SELECT Name, DepartmentID
                      FROM Employees
                      WHERE Salary > 50000;`
        },
        {
            id: 108,
            title: '108. User-Defined Functions',
            explanation: 'User-defined functions (UDFs) allow you to encapsulate logic and reuse it across queries and procedures.',
            example: `CREATE FUNCTION dbo.GetEmployeeName (@EmployeeID INT)
                      RETURNS NVARCHAR(50)
                      AS
                      BEGIN
                          DECLARE @Name NVARCHAR(50);
                          SELECT @Name = Name FROM Employees WHERE ID = @EmployeeID;
                          RETURN @Name;
                      END;`
        },
        {
            id: 109,
            title: '109. Stored Procedures',
            explanation: 'Stored procedures are precompiled SQL statements that can be executed with parameters and can encapsulate complex logic.',
            example: `CREATE PROCEDURE dbo.GetEmployeeDetails
                      @EmployeeID INT
                      AS
                      BEGIN
                          SELECT * FROM Employees WHERE ID = @EmployeeID;
                      END;`
        },
        {
            id: 110,
            title: '110. Triggers',
            explanation: 'Triggers are special types of stored procedures that are executed automatically in response to specific events on a table.',
            example: `CREATE TRIGGER trg_AfterInsert
                      ON Employees
                      AFTER INSERT
                      AS
                      BEGIN
                          INSERT INTO AuditLog (Action, EmployeeID, ActionDate)
                          SELECT 'Insert', ID, GETDATE() FROM inserted;
                      END;`
        },
        {
            id: 111,
            title: '111. SQL Server Data Types',
            explanation: 'SQL Server supports a variety of data types including numeric, date/time, string, and binary types.',
            example: `-- Example data types
                      CREATE TABLE ExampleTable (
                          IntColumn INT,
                          DateColumn DATE,
                          StringColumn NVARCHAR(100),
                          BinaryColumn VARBINARY(MAX)
                      );`
        },
        {
            id: 112,
            title: '112. SQL Server Security',
            explanation: 'SQL Server security involves managing user permissions, roles, and authentication to protect data integrity and privacy.',
            example: `-- Example of creating a user and granting permissions
                      CREATE LOGIN MyUser WITH PASSWORD = 'password';
                      CREATE USER MyUser FOR LOGIN MyUser;
                      EXEC sp_addrolemember 'db_datareader', 'MyUser';`
        },
        {
            id: 113,
            title: '113. SQL Server Backup and Restore',
            explanation: 'Backup and restore operations are essential for data recovery and protection in SQL Server.',
            example: `-- Backup example
                      BACKUP DATABASE MyDatabase
                      TO DISK = 'C:\Backups\MyDatabase.bak';
                      
                      -- Restore example
                      RESTORE DATABASE MyDatabase
                      FROM DISK = 'C:\Backups\MyDatabase.bak';`
        },
        {
            id: 114,
            title: '114. Database Normalization',
            explanation: 'Database normalization involves organizing a database to reduce redundancy and improve data integrity.',
            example: `-- Example of normalization
                      -- First Normal Form (1NF): No repeating groups
                      -- Second Normal Form (2NF): No partial dependencies
                      -- Third Normal Form (3NF): No transitive dependencies`
        },
        {
            id: 115,
            title: '115. Denormalization',
            explanation: 'Denormalization involves combining tables to improve query performance at the cost of increased redundancy.',
            example: `-- Example of denormalization
                      CREATE TABLE EmployeeDetails (
                          ID INT PRIMARY KEY,
                          Name NVARCHAR(50),
                          Department NVARCHAR(50)
                      );`
        },
        {
            id: 116,
            title: '116. Data Integrity Constraints',
            explanation: 'Data integrity constraints are rules enforced on database columns to ensure accuracy and consistency.',
            example: `-- Example constraints
                      CREATE TABLE Orders (
                          OrderID INT PRIMARY KEY,
                          OrderDate DATE NOT NULL,
                          CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID)
                      );`
        },
        {
            id: 117,
            title: '117. Handling Large Data Sets',
            explanation: 'Techniques for handling large data sets include indexing, partitioning, and efficient querying.',
            example: `-- Example of indexing a large table
                      CREATE INDEX IX_LargeTable_Column
                      ON LargeTable (ColumnName);`
        },
        {
            id: 118,
            title: '118. SQL Server Performance Tuning',
            explanation: 'Performance tuning involves optimizing queries and database configuration to improve response times and efficiency.',
            example: `-- Example of optimizing a query
                      SELECT Name
                      FROM Employees
                      WHERE DepartmentID = 1
                      ORDER BY Name;`
        },
        {
            id: 119,
            title: '119. Advanced Query Optimization',
            explanation: 'Advanced query optimization involves using execution plans, statistics, and hints to fine-tune queries for better performance.',
            example: `-- Example of using query hints
                      SELECT Name
                      FROM Employees WITH (INDEX(IX_Employees_Name))
                      WHERE DepartmentID = 1;`
        },
        {
            id: 120,
            title: '120. SQL Server Replication',
            explanation: 'SQL Server replication allows you to synchronize data across multiple databases to ensure consistency and availability.',
            example: `-- SQL Server replication involves setting up publications, subscriptions, and distributors.`
        },
        {
            id: 121,
            title: '121. SQL Server High Availability',
            explanation: 'High availability features include clustering, mirroring, and Always On availability groups to ensure database uptime.',
            example: `-- Example of setting up a basic high availability group requires configuration through SQL Server Management Studio.`
        },
        {
            id: 122,
            title: '122. SQL Server Clustering',
            explanation: 'SQL Server clustering provides high availability by using multiple servers (nodes) to provide failover support.',
            example: `-- SQL Server clustering requires setup through SQL Server Configuration Manager and Windows Server Failover Clustering.`
        },
        {
            id: 123,
            title: '123. SQL Server Mirroring',
            explanation: 'SQL Server mirroring provides high availability by maintaining a mirror copy of a database on a different server.',
            example: `-- Example of setting up mirroring involves configuring endpoints and mirroring partners.`
        },
        {
            id: 124,
            title: '124. SQL Server Always On Availability Groups',
            explanation: 'Always On availability groups provide high availability and disaster recovery solutions for databases.',
            example: `-- Setting up Always On availability groups involves configuring availability replicas and listeners.`
        },
        {
            id: 125,
            title: '125. SQL Server Data Warehousing',
            explanation: 'Data warehousing involves consolidating data from multiple sources into a central repository for analysis and reporting.',
            example: `-- Example involves creating data warehouse structures like fact and dimension tables.`
        },
        {
            id: 126,
            title: '126. Data Mining in SQL Server',
            explanation: 'Data mining involves using SQL Server Analysis Services (SSAS) to discover patterns and insights in data.',
            example: `-- Example involves creating and processing data mining models using SSAS.`
        },
        {
            id: 127,
            title: '127. SQL Server Integration Services (SSIS)',
            explanation: 'SSIS is used for data integration, transformation, and migration tasks.',
            example: `-- Example involves creating SSIS packages for ETL (Extract, Transform, Load) processes.`
        },
        {
            id: 128,
            title: '128. SQL Server Reporting Services (SSRS)',
            explanation: 'SSRS provides tools for creating, managing, and delivering reports and dashboards.',
            example: `-- Example involves designing reports using Report Designer and deploying them to a report server.`
        },
        {
            id: 129,
            title: '129. SQL Server Analysis Services (SSAS)',
            explanation: 'SSAS provides data analysis capabilities, including multidimensional and tabular data models.',
            example: `-- Example involves creating and processing OLAP cubes or tabular models using SSAS.`
        },
        {
            id: 130,
            title: '130. SQL Server Master Data Services (MDS)',
            explanation: 'MDS provides a way to manage and maintain master data across the organization.',
            example: `-- Example involves setting up and configuring master data models and entities in MDS.`
        },
        {
            id: 131,
            title: '131. SQL Server Data Quality Services (DQS)',
            explanation: 'DQS helps in managing and maintaining data quality by providing data profiling, cleansing, and matching.',
            example: `-- Example involves creating and using data quality projects to clean and validate data.`
        },
        {
            id: 132,
            title: '132. SQL Server Policy-Based Management',
            explanation: 'Policy-Based Management allows you to define and enforce policies for SQL Server instances and databases.',
            example: `-- Example involves creating policies and conditions to manage SQL Server settings and configurations.`
        },
        {
            id: 133,
            title: '133. SQL Server Auditing',
            explanation: 'Auditing helps track and monitor database activities, including security events and changes.',
            example: `-- Example involves configuring SQL Server Audit to capture specific events and store them in audit logs.`
        },
        {
            id: 134,
            title: '134. SQL Server Management Studio (SSMS)',
            explanation: 'SSMS is a comprehensive tool for managing SQL Server instances, databases, and server objects.',
            example: `-- Example involves using SSMS to connect to a SQL Server instance, run queries, and manage database objects.`
        },
        {
            id: 135,
            title: '135. SQL Server Custom Alerts and Notifications',
            explanation: 'Custom alerts and notifications help monitor SQL Server and notify administrators of critical issues.',
            example: `
                -- Create an Operator
                EXEC msdb.dbo.sp_add_operator
                    @name = N'SQLAdmin',
                    @email_address = N'sqladmin@example.com';
                
                -- Create an Alert
                EXEC msdb.dbo.sp_add_alert
                    @name = N'High CPU Usage Alert',
                    @message_id = 0,
                    @severity = 0,
                    @notification_message = N'CPU usage is high.',
                    @operator_name = N'SQLAdmin';
            `
        }

    ];

    const section = document.getElementById('queries');

    queries.forEach(query => {
        const article = document.createElement('article');
        article.className = 'article';

        const title = document.createElement('h2');
        title.textContent = query.title;
        article.appendChild(title);

        const explanation = document.createElement('p');
        explanation.textContent = query.explanation;
        article.appendChild(explanation);

        const exampleTitle = document.createElement('h3');
        exampleTitle.textContent = 'Example Query:';
        article.appendChild(exampleTitle);

        const exampleCode = document.createElement('pre');
        exampleCode.className = 'code-block';
        exampleCode.textContent = query.example;
        article.appendChild(exampleCode);

        section.appendChild(article);
    });
});
