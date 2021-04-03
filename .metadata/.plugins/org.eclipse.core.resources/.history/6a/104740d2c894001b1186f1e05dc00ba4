package com.employee.employee.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.employee.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	void deleteEmployeeById(Long id);
	
	//Optional findEmployeeById(Long id);
	
	Employee findEmployeeById(Long id);
}
