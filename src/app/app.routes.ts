import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalogo/catalogo').then((m) => m.Catalogo),
  },
  {
    path: 'informacion',
    loadComponent: () => import('./pages/informacion/informacion').then((m) => m.Informacion),
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./pages/preguntas-frecuentes/preguntas-frecuentes').then(
        (m) => m.PreguntasFrecuentes,
      ),
  },

  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./pages/sobre-nosotros/sobre-nosotros').then((m) => m.SobreNosotros),
  },

  {
    path: 'privacidad',
    loadComponent: () => import('./pages/privacidad/privacidad').then((m) => m.Privacidad),
  },
  {
    path: 'terminos',
    loadComponent: () => import('./pages/terminos/terminos').then((m) => m.Terminos),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
