import { Component } from '@angular/core';
import { employees } from '../../data/employees';
import { metric } from "../../data/metric";
import { openings } from '../../data/openings';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  metrics = metric;
  employees = employees;
  openings = openings;
}
