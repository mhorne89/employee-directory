import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/employees.html'
})

export class EmployeeComponent {
  public employees: any;
  public filter: string;

  constructor(private store: Store<any>) {
    store.select('employees').subscribe(employees => this.employees = employees);
  }

  filterList(value) { this.filter = (value === '') ? null : value; }
}
