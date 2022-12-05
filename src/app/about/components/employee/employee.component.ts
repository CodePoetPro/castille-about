import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {
  @Input() name!:string;
  @Input() position!  :string;
  @Input() avatar!:string;
  @Input() flag!:string;
}
