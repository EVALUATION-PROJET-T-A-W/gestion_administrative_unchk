import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./Auth/register/register')
        .then(m => m.Register)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'etudiant',
    loadComponent: () =>
      import('./pages/etudiant/etudiant').then(m => m.Etudiant)
  },

  {
    path: 'formateur',
    loadComponent: () =>
      import('./pages/formateur/formateur').then(m => m.Formateur)
  },

  {
    path: 'formation',
    loadComponent: () =>
      import('./pages/formation/formation').then(m => m.Formation)
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];
