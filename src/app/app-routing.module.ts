import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListsComponent } from './employee-lists/employee-lists.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employees',component:EmployeeListsComponent},
  {path:'add',component:CreateEmployeeComponent},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path:'details/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
