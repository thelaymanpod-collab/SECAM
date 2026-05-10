import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BishopsComponent } from './components/bishops/bishops.component';
import { PlenariesComponent } from './components/plenaries/plenaries.component';
import { CommissionsComponent } from './components/commissions/commissions.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'bishops',
    component: BishopsComponent,
  },
  {
    path: 'plenaries',
    component: PlenariesComponent,
  },
  {
    path: 'commissions',
    component: CommissionsComponent,
  },
  {
    path: 'publications',
    component: PublicationsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
