# Motion Picture Data Management Application


***
## 📘 Basic Overview


<br>

Motion Picture Data Management Application
This document outlines technical and functional requirements needed to develop a simple motion picture data management application.

Technical Requirements
The application should function like a SPA with no postbacks to get/send data to the server. This will require an API for your client-side code to communicate with to send/receive data. How this is implemented is up to you.

The application must be implemented using these technologies:

Database:
Microsoft SQL Server 2019 Express
Microsoft SQL Server Management Studio (SSMS)
IDE: Microsoft Visual Studio Community 2019
Server Side:
ASP.NET Core 3.x
C#
Client:
HTML
CSS
ES6
Vue.js
Other:
Solution must be stored in a Github repository
Github repository must contain SQL scripts to create the database table, stored procedures etc. needed to fulfill requirements. A backup of the database could also be provided in the repo instead. This will allow us to quickly setup a matching database to test.
Optional:

Bootstrap 4 (Free HTML, CSS, Javascript Library)
Font Awesome (Free Icon Library)
Functional Requirements
Database
A table must be created to store motion picture records:

Table Name: MotionPictures

Columns:

ID
Data Type: INT
Primary Key
NOT NULL
Name
Data Type: NVARCHAR(50)
NOT NULL
Description
Data Type: NVARCHAR(500)
NULLABLE
Release Year
Data Type: INT
NOT NULL
UI
A page will need created that allows users to:

View a listing table of all motion picture records saved to the database
Create new motion picture records
Copy existing motion picture records
Edit existing motion picture records
Delete existing motion picture records
UI Requirements
Listing Table Columns:

Name
Description
Release Year
Actions
Figure 1
Figure 1: Example listing screen
When the user clicks the “Add, Edit, or Copy” Buttons:

The listing table is hidden, and a form is displayed that allows the user to enter/modify data for a motion picture record.

Form Fields:

Name - Textbox
Limited to 50 characters
Required
Description - Text Area
Limited to 500 characters
Not Required
Release Year - Textbox
Limited to and must be 4 characters
Required
Form Action Buttons:

Save
When clicked, form data must be validated. If validation fails, data is not saved to the database and the user must be notified of what is wrong with the form data. If validation is passed, the data is saved to the database, the form is hidden, and the listing grid is displayed.
Cancel
When clicked, the form is hidden and the listing table is displayed.
Delete
Only visible when editing an existing record
When clicked, the record is deleted from the database, the form is hidden, and listing table is displayed.
Other UI Requirements
When a field fails validation, the input should be outlined in red
When a field fails validation, a message should be displayed to the user explaining what is causing validation to fail
Optional Bonus Points:

Show notifications to the user when a record is successfully saved/deleted
Show confirmation dialog when the user tries to delete an existing record
Create/Update/Copy form is handled via a modal
Listing table can be sorted by clicking on the table headers

***
## 🚀 How To Use

<br>

🚫 N/A


***
## ❤️ You may also like...

<br>

- Test accuracy: 82.81%


