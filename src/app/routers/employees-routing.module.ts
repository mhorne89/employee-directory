import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../components/employees.component';
import { EmployeeService } from '../services/employees.service';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ EmployeeService ]
})
export class AppRoutingModule { }
