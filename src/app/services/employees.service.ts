import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Import environmental config
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
  nodeUrl: string;

  constructor (private http: HttpClient, private location: Location) {
    this.setNodeUrl();
  }

  // Sets Node URL depending on environment
  setNodeUrl() {
    const nodePort = (environment.production) ? '' : ':8081';
    this.nodeUrl = `${ location.protocol }//${ location.hostname }${ nodePort }`;
  }

  getEmployees() {
    return this.http.get(`${ this.nodeUrl }/get-employees`);
  }
}
