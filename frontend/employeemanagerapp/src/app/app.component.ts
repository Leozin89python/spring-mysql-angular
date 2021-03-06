import { EmployeeService } from './employee.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employees  :Employee[]

  constructor(private employeeService :EmployeeService){}

  ngOnInit(){
    this.getEmployee()
  }

  public getEmployee() :void {
    this.employeeService.getEmployees().subscribe(
      (response :Employee[]) =>{
         this.employees = response
      },
      (error :HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  public onOpenModal(employee :Employee, mode :string) :void {
      const button = document.createElement('button')
      button.type = 'button'
      button.style.display = 'none'
      button.setAttribute('data-toggle', 'modal')
      if(mode === 'add'){
        button.setAttribute('data-target', 'addEmployeeModal')
      }
      if(mode === 'edit'){
        button.setAttribute('data-target', 'addEmployeeModal')
      }
      if(mode === 'delete'){
        button.setAttribute('data-target', 'addEmployeeModal')
      }
  }


}

