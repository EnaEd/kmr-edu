import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-photo-gallery',
    imports: [],
    templateUrl: './photo-gallery.component.html',
    styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  constructor(private router: Router) {
  }

  homeClick() {
    this.router.navigate(['home']);
  }
}
