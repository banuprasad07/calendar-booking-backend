**Calendar Booking Backend**



&nbsp;   A backend service to schedule meetings while preventing overlapping time slots.



**Tech Stack**

\- Node.js

\- Express

\- Sequelize ORM

\- SQLite (for local development)



**Features**

\- Create and fetch users

\- Create, fetch, and list meetings

\- Prevent overlapping meetings for the same user

\- Proper validation and HTTP status codes



**Setup Instructions**



1\. Clone the repository

2\. Install dependencies



**npm install** 


3.npm install


**Run the server**



4.npx nodemon src/server.js


**Server will run at** 



5.http://localhost:3000



**API Endpoints

For Users**


POST `/users` 

Create a new user



GET `/users/:id`

Get user by ID



**For Meetings**



POST `/meetings`

Create a meeting



GET `/meetings`

List all meetings  

(Supports optional filters: `userId`, `startDate`, `endDate`)



GET `/meetings/:id`

Get meeting by ID

**Validation Rules**



-'startTime` must be before `endTime`

\- Required fields must be present

\- Proper error messages are returned for invalid input

\- Correct HTTP status codes are used





**Conflict Prevention Rule**



A meeting cannot overlap with an existing meeting for the same user.



If a conflict is detected, the API responds with:



\- 400 Bad Request

\- Message: `Time slot already booked`





 **Error Handling**



\- 400 – Validation or business rule error

\- 404 – Resource not found

\- 201 – Resource created successfully

\- 200– Successful fetch

\- 204 – Successful delete





**Demo Flow (For Evaluation)**



1\. Create a user using `POST /users`

2\. Create a meeting using `POST /meetings`

3\. Try creating an overlapping meeting (should fail)

4\. Fetch meetings using `GET /meetings`

5\. Fetch a specific meeting using `GET /meetings/:id`





**Notes**



\- SQLite is used for simplicity in local development

\- Sequelize ORM is used for database interaction

\- Conflict detection logic is implemented in the service layer





