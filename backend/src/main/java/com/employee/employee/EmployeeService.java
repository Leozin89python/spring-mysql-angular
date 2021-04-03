package com.employee.employee;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employee.entities.Employee;
import com.employee.employee.repository.EmployeeRepository;

@Service
public class EmployeeService {
	private final EmployeeRepository repository;
	
	@Autowired
	public EmployeeService(EmployeeRepository repository) {
		this.repository = repository;
	}
	
	public Employee addEmployee(Employee employee) {	
			employee.setEmployeeCode(UUID.randomUUID().toString());
			return repository.save(employee);
	}
	
	public List<Employee> findAllEmployee(){
			return repository.findAll();
	}
	
	public Employee updateEmployee(Employee employee) {
			return repository.save(employee);
	}
	
	public Employee findEmployeeById(Long id) {
		return repository.findEmployeeById(id);
	}
	
	public void deleteEmployee(Long id) {
			repository.deleteEmployeeById(id);
	}
}
