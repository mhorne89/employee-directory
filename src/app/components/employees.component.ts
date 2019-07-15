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
    const order = [
      'Management',
      'Amorelie Labels',
      'B2B',
      'BI',
      'Brand',
      'Business Development',
      'Buying & Supply Chain',
      'Content',
      'Customer Care',
      'Finance',
      'Graphics',
      'IT',
      'Legal',
      'Marketing',
      'Marketplaces',
      'Office Management',
      'Operations',
      'PR & Social Media',
      'People & Culture',
      'Product',
      'Shop Management',
      'Toyparty'
    ];

    const departments_grouped = groupBy(employees, 'department');
    const departments_ordered = [];

    order.forEach((department) => {
      departments_ordered[department] = departments_grouped[department];
      delete departments_grouped[department];
    });

    departments_ordered['undefined'] = departments_grouped['undefined'];

    const arrayed = Object.values(departments_ordered);
    this.departments = arrayed;
  }
}
