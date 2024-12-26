package com.HRMS.hrmspro.service;

import com.HRMS.hrmspro.model.Employee;
import com.HRMS.hrmspro.model.SalarySlip;
import com.HRMS.hrmspro.repository.EmployeeRepository;
import com.HRMS.hrmspro.repository.SalarySlipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalarySlipService {

    @Autowired
    private SalarySlipRepository salarySlipRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public SalarySlip generateSalarySlip(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new RuntimeException("Employee not found"));

        double pfDeduction = employee.getBasicSalary() * 0.12;
        double professionalTax = 200;
        double netSalary = employee.getBasicSalary() - (pfDeduction + professionalTax);

        SalarySlip salarySlip = new SalarySlip();
        salarySlip.setEmployee(employee);
        salarySlip.setPfDeduction(pfDeduction);
        salarySlip.setProfessionalTax(professionalTax);
        salarySlip.setNetSalary(netSalary);

        return salarySlipRepository.save(salarySlip);
    }
}
