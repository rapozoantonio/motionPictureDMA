# Motion Picture Data Management Application


***
## 📘 Basic Overview


<br>

The application should function like a SPA with no postbacks to get/send data to the server. This will require an API for your client-side code to communicate with to send/receive data. How this is implemented is up to you.

***
## 🚀⚙️ Technical Requirements

<br>

Database:

- Microsoft SQL Server 2019 Express
- Microsoft SQL Server Management Studio (SSMS)
IDE: Microsoft Visual Studio Community 2019

Server Side:

- ASP.NET Core 3.x
- C#

Client:

- HTML
- CSS
- ES6
- Vue.js

***
## 🚀 Technical Requirements

Database
A table must be created to store motion picture records:

Table Name: MotionPictures

Columns:

ID
-Data Type: INT
-Primary Key
-NOT NULL

Name
-Data Type: NVARCHAR(50)
-NOT NULL

Description
-Data Type: NVARCHAR(500)
-NULLABLE

Release Year
-Data Type: INT
-NOT NULL

UI
A page will need created that allows users to:

-View a listing table of all motion picture records saved to the database
-Create new motion picture records
-Copy existing motion picture records
-Edit existing motion picture records
-Delete existing motion picture records

UI Requirements
Listing Table Columns:

-Name
-Description
-Release Year
-Actions

Other UI Requirements
-When a field fails validation, the input should be outlined in red
-When a field fails validation, a message should be displayed to the user explaining what is causing validation to fail

Optional Bonus Points:

-Show notifications to the user when a record is successfully saved/deleted
-Show confirmation dialog when the user tries to delete an existing record
-Create/Update/Copy form is handled via a modal
-Listing table can be sorted by clicking on the table headers

<br>




