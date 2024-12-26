# HRMS Payroll Application

A simple HRMS Payroll application built using **Spring Boot**, **React**, and **MySQL**. The application allows HR managers to manage employee records and generate salary slips.

---

## Features

- **Employee Management**:
  - Add, update, and delete employee records.
  - View employee details in a table format.
  
- **Salary Slip Generation**:
  - Automatically calculates salary components such as **Basic Pay**, **PF Deduction**, **Professional Tax**, and **Net Salary**.
  - Generate salary slips in **PDF format**.

---

## Tech Stack

- **Frontend**: React
- **Backend**: Java Spring Boot
- **Database**: MySQL
- **PDF Generation**: iText (for salary slip generation)

---

## Installation and Setup

### Prerequisites

- Java 8 or above
- Node.js and npm
- MySQL database
- Git (for version control)

### 1. Clone the Repository

git clone https://github.com/YourUsername/HRMS-Application.git
cd HRMS-Application

2. Set Up Backend (Spring Boot)
Install required dependencies using Maven or Gradle.

Create the application.properties file in src/main/resources to configure the database connection:

spring.datasource.url=jdbc:mysql://localhost:3306/hrms
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update


3.Run the backend using:
mvn spring-boot:run

3. Set Up Frontend (React)
Go to the frontend directory:

cd frontend
Install the required dependencies using npm:

npm install
Start the frontend server:

npm start
The frontend will start on port 3000 by default.

4. Database Setup

Create a MySQL database named hrms:

CREATE DATABASE hrms;

Create tables for employee records and salary slips by running the SQL scripts provided in src/main/resources/schema.sql.
