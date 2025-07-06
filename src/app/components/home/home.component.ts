import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {EventStore} from '../../infrastructure/states/events/event-store';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly eventStore = inject(EventStore)

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.eventStore.loadEvents();

  }

  AboutClick() {
    this.router.navigate(['about']);
  }

  PhotoGalleryClick() {
    this.router.navigate(['photo-gallery']);
  }
}
