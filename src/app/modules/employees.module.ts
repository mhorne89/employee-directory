import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgPipesModule } from 'ngx-pipes';
import { AppRoutingModule } from '../routers/employees-routing.module';

import { EmployeeComponent } from '../components/employees.component';

import { SafePipe } from '../filters/safeHTML.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgPipesModule
  ],
  declarations: [ EmployeeComponent, SafePipe ]
})
export class EmployeesModule { }
