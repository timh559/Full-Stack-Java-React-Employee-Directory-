package com.fullstackapp.demo.controller;

import com.fullstackapp.demo.exception.ResourceNotFoundException;
import com.fullstackapp.demo.model.Employee;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import com.fullstackapp.demo.repository.EmployeeRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/Employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/{employeeId}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist"));
        employeeRepository.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // get employee by id rest api
    @GetMapping("/{employeeId}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist"));
        return ResponseEntity.ok(employee);
    }

    // update employee rest api
    @PutMapping("/{employeeId}/edit")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long employeeId,
            @RequestBody Employee employeeDetails) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist"));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());
        employee.setTitle(employeeDetails.getTitle());
        employee.setPhoneNum(employeeDetails.getPhoneNum());
        employee.setAddress(employeeDetails.getAddress());
        employee.setCity(employeeDetails.getCity());
        employeeRepository.save(employee);
        return ResponseEntity.ok(employee);
    }
}
