import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-lists',
  templateUrl: './employee-lists.component.html',
  styleUrls: ['./employee-lists.component.css']
})
export class EmployeeListsComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
      this.employees = this.employeeService.getEmployees();
  }
  
  deleteEmployee(id:number)
  {
    this.employeeService.removeEmployee(id)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();

      },
     error => console.log(error)
    )
  }
  updateEmployee(id:number)
  {
    this.router.navigate(['update',id]);
  }
  getDetail(id:number)
  {
    this.router.navigate(['details',id]);
  }

}
