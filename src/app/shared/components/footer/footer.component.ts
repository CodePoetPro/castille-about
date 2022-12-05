import { Component } from '@angular/core';
import { directory, socialIcons } from '../../data/footer-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
 directory = directory
 socialIcons = socialIcons;
}
