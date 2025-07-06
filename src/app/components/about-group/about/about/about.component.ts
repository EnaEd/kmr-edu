import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {StaffStore} from '../../../../infrastructure/states/staff/staff-store';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers:[StaffStore]
})
export class AboutComponent {
  readonly staffStore=inject(StaffStore)
  constructor(private router: Router) {
  }

  homeClick() {
    this.router.navigate(['home']);
  }
}
