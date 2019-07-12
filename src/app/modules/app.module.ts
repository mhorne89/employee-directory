// Import Node Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgPipesModule } from 'ngx-pipes';
import { AppRoutingModule } from '../routers/employees-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

// Import Modules
import { EmployeesModule } from './employees.module';

// Import Components
import { AppComponent } from '../components/app.component';

// Import Reducers
import { employees } from '../reducers/employees.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgPipesModule,
    EmployeesModule,
    BrowserAnimationsModule,
    StoreModule.provideStore({
      employees: employees
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
