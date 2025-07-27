import { Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalog/catalog';
import { PanierComponent } from './components/panier/panier';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'panier', component: PanierComponent }
];
