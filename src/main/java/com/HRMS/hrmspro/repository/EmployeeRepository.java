package com.HRMS.hrmspro.repository;

import com.HRMS.hrmspro.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
