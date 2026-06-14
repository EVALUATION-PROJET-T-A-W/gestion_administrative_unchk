import { Routes } from '@angular/router';

export const routes: Routes = [

  // =========================
  // AUTH
  // =========================
  {
    path: 'login',
    loadComponent: () =>
      import('./Auth/login/login').then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Auth/register/register').then(m => m.Register)
  },

  // =========================
  // ADMIN LAYOUT
  // =========================
  {
    // path: '',
    // loadComponent: () =>
    //   import('./layouts/admin-layout/admin-layout')
    //     .then(m => m.AdminLayout),

    children: [

      // {
      //   path: 'dashboard',
      //   loadComponent: () =>
      //     import('./pages/dashboard/dashboard')
      //       .then(m => m.Dashboard)
      // },

      {
        path: 'etudiant',
        loadComponent: () =>
          import('./pages/etudiant/etudiant')
            .then(m => m.Etudiant)
      },

      {
        path: 'formateur',
        loadComponent: () =>
          import('./pages/formateur/formateur')
            .then(m => m.Formateur)
      },

      {
        path: 'formation',
        loadComponent: () =>
          import('./pages/formation/formation')
            .then(m => m.Formation)
      },

      {
        path: 'stage',
        loadComponent: () =>
          import('./pages/stage/stage')
            .then(m => m.Stage)
      },

      {
        path: 'utilisateur',
        loadComponent: () =>
          import('./pages/utilisateur/utilisateur')
            .then(m => m.Utilisateur)
      }

    ]
  },

  // =========================
  // DEFAULT
  // =========================
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];
