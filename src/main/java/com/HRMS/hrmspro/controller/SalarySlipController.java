package com.HRMS.hrmspro.controller;

import com.HRMS.hrmspro.model.SalarySlip;
import com.HRMS.hrmspro.service.SalarySlipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/salary-slip")
public class SalarySlipController {

    @Autowired
    private SalarySlipService salarySlipService;

    @PostMapping("/{employeeId}")
    public SalarySlip generateSalarySlip(@PathVariable Long employeeId) {
        return salarySlipService.generateSalarySlip(employeeId);
    }
}
