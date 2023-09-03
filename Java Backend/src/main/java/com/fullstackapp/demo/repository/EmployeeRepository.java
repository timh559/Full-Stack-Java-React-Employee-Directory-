package com.fullstackapp.demo.repository;

import com.fullstackapp.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
