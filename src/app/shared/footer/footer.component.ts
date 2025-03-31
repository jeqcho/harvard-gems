import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  startYear = 2022;
  currentYear = new Date().getFullYear();
  yearRange = `${this.startYear}-${this.currentYear}`;
}
