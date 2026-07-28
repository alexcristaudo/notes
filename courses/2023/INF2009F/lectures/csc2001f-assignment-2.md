---
title: CSC2001F Assignment 2
type: lecture
status: needs-review
source: onedrive
assets: [CSC2001F-Assignment-2.docx]
---
> [!warning]
> Converted from .docx with 1 warning(s) — check tables and equations. Original attached.

**CSC2001F Assignment 2**

By: CRSALE010, CRSNIC014, ERSJAC011, IFRFAB001, MCKCON007

Group 26

2023

Question A

*(image omitted — open the attached original)*

Question B

Staff (Staff\_ID, Fname, Sname, Email, Salary)

StaffPhoneNums (Staff\_ID, phoneNum)

Lectures (Staff\_ID, Course\_ID, Module, Num\_Of, Year)

Convenes (Staff\_ID, Course\_ID, Year)

Tutoring (Staff\_ID, Student\_ID, Course\_ID, Venue, Time, Day, Year)

Student (Student\_ID, Fname, Sname, Credits)

Assessment (Assessment\_ID, Year, Mark, Assessment\_Name, Type, CourseID**,** StudentID)

Enrolled (Student\_ID, Course\_ID, Year)

Course (Course\_ID, Faculty, Course\_Name, Sub-Min, Weighting, Credit\_Reward)

Question C

The query is:

*(image omitted — open the attached original)*

The output from the query is:

*(image omitted — open the attached original)*

This query serves to display the email address, the number of sales made, the number of items they have sold (there can be multiple items in one order) and the total money they made with these sales of the salesRepEmployee that has made the most sales of items, not orders.

The tables joined in the query:

Orders is NATURAL JOINed with orderdetails to give all the information about one order by one customer (returns a new table (table 1) where orderNumbers are the same)

This results in a table with a snippet as shown (only showing relevant fields)

*(image omitted — open the attached original)*

Note that orderdetails contains multiple products for one order, so a join is needed to ensure we count every product that was ordered rather than the number of orders and to use the quantityOrdered and priceEach attributes

Then we NATURAL JOIN with the customers table (with table 1 created in prior NATURAL JOIN) to create a new table (table 2) which gives all results where the customer number is the same. Each customer is associated with one salesRepEmployee, given in the customers table. To get the salesRepEmployeeNumber for an order, we thus join the customers table to the table 1 (that gives the salesRepEmployee shown in the above image)

We then inner join table 2 with employees to get the email address associated with one salesRepEmployee. This is joined on the salesRepEmployeeNumber and the employeeNumber

The SELECT then uses all the information in these tables to get:

The aggregate function COUNT(\*) counts the number of rows associated with the sales made by a salesRepEmployees (a sale being the purchase of an item, not placing an order)

The aggregate function SUM(quantityOrdered) sums up all the values in the quantityOrdered that is associated with each salesRepEmployeeNumber. This is thus the number of items a sales employee has sold

The aggregate function ROUND(SUM(quantityOrdered \* priceEach), 0) sums up all the monetary values associated with each order, then round it to nearest whole number

The aggregate functions are dealt with by a GROUP BY which then groups the table into sections based on the email (which is unique for each salesRepEmployee) so indirectly grouping by salesRepEmployeeNumber without causing errors

The HAVING condition involves a nested select that we will deal with in 2 parts:

1\. The nested select uses another nested select to create and use a new table to get the data from

The table the data is from is the table that results from:

SELECT

COUNT(\*) AS counter

FROM orders

NATURAL JOIN orderdetails

NATURAL JOIN customers

GROUP BY

customers.salesRepEmployeeNumber

Note that we rename the COUNT(\*) attribute to "counter". This will be used later to access this variable. The joins follow similarly from above and this counts how many times a salesRepEmployee has made a sale of an item. The table for this query looks as such:

*(image omitted — open the attached original)*

The "AS count" after the brackets serves to rename this table to "count"

2\. The statement SELECT MAX(count.counter) thus gets the max counter from this count table

So we then choose all salesRepEmployees that have the same maximum counter, with HAVING COUNT(\*) = (<the max counter from the inner select query>)

Question D

During the planning phase, each member got involved and gave their opinion on what we should do at each point. Everyone contributed to the planning, which was the bulk of the work as we planned possible routes for the questions. After this,

MCKCON007 and IFRFAB001 used this planning to complete Question A and CRSALE010, CRSNIC014 and ERSJAC011 completed Question B and C. Each group then checked the other groups work to discuss possible changes.

Question E

Completed via Vula
