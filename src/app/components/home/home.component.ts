import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [
        RouterOutlet
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router) {
  }

  AboutClick() {
    this.router.navigate(['about']);
  }

  PhotoGalleryClick() {
    this.router.navigate(['photo-gallery']);
  }
}
