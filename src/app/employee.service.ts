import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployee(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/EmployeeApi/employee/"+id);
  }

  addEmployee(employee:object):Observable<object>
  {
    return this.http.post("http://localhost:8080/EmployeeApi/addEmployee",employee);
  }

  getEmployees(): Observable<any> 
  {
    return this.http.get("http://localhost:8080/EmployeeApi/employees");
  }

removeEmployee(id:number):Observable<any>
{
  return this.http.delete("http://localhost:8080/EmployeeApi/removeEmployee/"+id,{responseType:'text'});
}
updateEmployee(id:number,value:any):Observable<object>
{
   return this.http.put("http://localhost:8080/EmployeeApi/updateEmployee",value);
}
  
}
