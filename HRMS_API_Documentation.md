
# HRMS API Documentation

## 1. Employee Management API

### Get All Employees
- **Endpoint**: `GET /api/employees`
- **Description**: Retrieves the list of all employees.

#### Response:
```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "designation": "Software Engineer",
        "basicSalary": 50000,
        "department": "Engineering"
    },
    ...
]
```

### Add an Employee
- **Endpoint**: `POST /api/employees`
- **Request Body**:
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "designation": "Software Engineer",
    "basicSalary": 50000,
    "department": "Engineering"
}
```
- **Description**: Adds a new employee to the system.

#### Response:
```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "designation": "Software Engineer",
    "basicSalary": 50000,
    "department": "Engineering"
}
```

### Update an Employee
- **Endpoint**: `PUT /api/employees/{id}`
- **Request Body**:
```json
{
    "name": "John Doe",
    "email": "john.doe@updated.com",
    "designation": "Senior Software Engineer",
    "basicSalary": 60000,
    "department": "Engineering"
}
```
- **Description**: Updates the details of an existing employee.

#### Response:
```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@updated.com",
    "designation": "Senior Software Engineer",
    "basicSalary": 60000,
    "department": "Engineering"
}
```

### Delete an Employee
- **Endpoint**: `DELETE /api/employees/{id}`
- **Description**: Deletes an employee from the system.

#### Response:
```json
{
    "message": "Employee deleted successfully."
}
```

## 2. Salary Slip Generation API

### Generate Salary Slip
- **Endpoint**: `POST /api/employees/{id}/salary-slip`
- **Description**: Generates a salary slip for the employee with the given `id`. The salary slip includes:
  - Basic Salary
  - PF Deduction (12% of Basic Salary)
  - Professional Tax (₹200 fixed)
  - Net Salary (Basic Salary - PF Deduction - Professional Tax)

#### Response:
```json
{
    "employeeId": 1,
    "basicSalary": 50000,
    "pfDeduction": 6000,
    "professionalTax": 200,
    "netSalary": 44000
}
```

## Error Handling

In case of errors, the API will respond with a status code and an error message.

### Example Error Response:
```json
{
    "status": 400,
    "message": "Bad Request"
}
```
