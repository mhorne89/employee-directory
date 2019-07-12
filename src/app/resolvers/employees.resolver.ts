// Import Angular modules
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EmployeeService } from '../services/employees.service';


@Injectable()
export class EmployeeResolver implements Resolve<any> {
  employees: Object;

  constructor(private EmployeeService: EmployeeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.EmployeeService.getEmployees().subscribe(data => this.assignEmployees(data));
  }

  assignEmployees(data) { this.employees = data; }
}
