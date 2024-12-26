package com.HRMS.hrmspro.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SalarySlip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;

    private double pfDeduction;
    private double professionalTax;
    private double netSalary;
}
