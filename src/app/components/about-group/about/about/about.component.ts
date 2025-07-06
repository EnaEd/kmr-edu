import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StaffStore} from '../../../../infrastructure/states/staff/staff-store';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    AsyncPipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [StaffStore]
})
export class AboutComponent implements OnInit {
  readonly staffStore = inject(StaffStore)

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.staffStore.loadStaff();
    }

  homeClick() {
    this.router.navigate(['home']);
  }
}
