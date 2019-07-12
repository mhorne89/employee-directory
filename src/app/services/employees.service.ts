import { Injectable } from '@angular/core';
import { Http, Response,  } from '@angular/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Import environmental config
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
  nodeUrl: string;

  constructor (private http: Http, private location: Location) {
    this.setNodeUrl();
  }

  // Sets Node URL depending on environment
  setNodeUrl() {
    const nodePort = (environment.production) ? '' : ':8081';
    this.nodeUrl = `${ location.protocol }//${ location.hostname }${ nodePort }`;
  }

  getEmployees() {
    return this.http.get(`${ this.nodeUrl }/get-employees`).map(this.handleSuccess).catch(this.handleError);
  }

  // Function to handle successful response
  private handleSuccess (res: Response) {
    console.log(`%c Successfull retrieved data: ${ res.status }`, 'color: #4F8A10');
    return res.json();
  }

  // Function to handle error in response
  private handleError (error: Response | any) {
    console.log(`%c Error: ${ error.status }: ${ error.statusText }`, 'color: #D8000C');
    return Observable.throw(`${ error.status }: ${ error.statusText }`);
  }
}
