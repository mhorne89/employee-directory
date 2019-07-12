import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.html'
})

export class AppComponent {
  constructor(private http: EmployeeService, private store: Store<any>) {
    this.http.getEmployees().subscribe(employees => this.storeEmployees(employees));
  }

  storeEmployees(employees) {
    const formattedEmployees = [];

    employees.items.forEach((employee) => {      
      if (employee['fields']['image'] && employee['fields']['image']['fields']) {
        employee['fields']['picture'] = employee['fields']['image']['fields']['file']['url'];
      } else {
        employee['fields']['picture'] = './assets/images/default.png';
      }

      formattedEmployees.push(employee['fields']);
    });

    this.store.dispatch({ type: 'SET_EMPLOYEES', payload: formattedEmployees });
  }
}
