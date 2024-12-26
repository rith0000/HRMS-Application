// Sample data for employees
let employees = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', designation: 'Manager', basicSalary: 50000, department: 'Sales' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', designation: 'Developer', basicSalary: 40000, department: 'IT' }
];

// Function to display employee data in the table
function displayEmployees() {
    const tableBody = document.querySelector('#employee-table tbody');
    tableBody.innerHTML = ''; // Clear existing table data

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.designation}</td>
            <td>${employee.basicSalary}</td>
            <td>${employee.department}</td>
            <td>
                <button onclick="deleteEmployee(${employee.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle employee form submission
document.getElementById('employee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const designation = document.getElementById('designation').value;
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const department = document.getElementById('department').value;

    const newEmployee = {
        id: employees.length + 1,
        name,
        email,
        designation,
        basicSalary,
        department
    };

    employees.push(newEmployee);
    displayEmployees();

    // Clear the form fields
    document.getElementById('employee-form').reset();
});

// Function to delete an employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

// Function to handle salary slip generation
document.getElementById('salary-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const employeeId = parseInt(document.getElementById('employee-id').value);
    const employee = employees.find(emp => emp.id === employeeId);

    if (employee) {
        const pfDeduction = (employee.basicSalary * 12) / 100;
        const professionalTax = 200;
        const netSalary = employee.basicSalary - (pfDeduction + professionalTax);

        document.getElementById('salary-slip').innerHTML = `
            <h3>Salary Slip for ${employee.name}</h3>
            <p><strong>Basic Salary:</strong> ₹${employee.basicSalary}</p>
            <p><strong>PF Deduction:</strong> ₹${pfDeduction}</p>
            <p><strong>Professional Tax:</strong> ₹${professionalTax}</p>
            <p><strong>Net Salary:</strong> ₹${netSalary}</p>
        `;
    } else {
        alert('Employee not found!');
    }

    // Clear the salary form
    document.getElementById('salary-form').reset();
});

// Initial call to display the employees
displayEmployees();
