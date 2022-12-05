import { Component, Input } from '@angular/core';

interface OpeningComponentInput { 
  company : {
    logo : string;
    name : string;
  },
  job : {
    title : string;
    role: string;
    category : string;
    level : string;
  }
  skills : Array<string>
}
@Component({
  selector: 'about-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})

export class OpeningComponent {
  @Input() data! : OpeningComponentInput
}
