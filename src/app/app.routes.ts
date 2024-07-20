import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
      { path: 'dashboards', loadComponent: () => import('./dashboards/dashboards.component').then(m => m.DashboardsComponent) },
      { path: 'filmes', loadComponent: () => import('./filmes/filmes.component').then(m => m.FilmesComponent) },
    ]
  }
];
