import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import {ProjectsComponent} from '../projects/projects.component';
import {PhotosComponent} from '../photos/photos.component';
import {ContactComponent} from '../contact/contact.component';
import {HomeComponent} from '../home/home.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactComponent }
];
