import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { OpeningComponent } from './components/opening/opening.component';

@NgModule({
    declarations: [
        AboutPageComponent,
        EmployeeComponent,
        OpeningComponent
    ],
    imports: [
      CommonModule,
    ]
})
export class AboutModule { }
