import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import {ProjectsComponent} from '../projects/projects.component';
import {PhotosComponent} from '../photos/photos.component';
import {ContactComponent} from '../contact/contact.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactComponent }
];
