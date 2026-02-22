import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./pages/catalogo/catalogo').then(m => m.Catalogo)
  },
  {
    path: 'informacion',
    loadComponent: () =>
      import('./pages/informacion/informacion').then(m => m.Informacion)
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./pages/preguntas-frecuentes/preguntas-frecuentes').then(m => m.PreguntasFrecuentes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
