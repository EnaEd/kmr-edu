import { Routes } from '@angular/router';
import {AboutComponent} from './components/about-group/about/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {PhotoGalleryComponent} from './components/photo-gallery/photo-gallery.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
