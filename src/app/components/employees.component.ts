import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/employees.html'
})

export class EmployeeComponent {
  public employees: any;
  public departments: any;
  public filter: string;

  constructor(private store: Store<any>) {
    store.select('employees').subscribe(employees => this.processEmployees(employees));
  }

  filterList(value) { this.filter = (value === '') ? null : value; }
    
  processEmployees(employees) {
    const grouped = groupBy(employees, 'department');
    const management = grouped['Management'];
    const not_defined = grouped['undefined'];
    delete grouped['Management'];
    delete grouped['undefined'];
    
    const arrayed = Object.values(grouped);
    const arrayed_management = Object.values(management);
    const arrayed_undefined = Object.values(not_defined);
    
    arrayed.unshift(arrayed_management)
    arrayed.push(arrayed_undefined);
    
    this.departments = arrayed;
  }
}
