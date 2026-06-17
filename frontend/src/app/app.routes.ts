import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { DashboardEtudiant } from './pages/etudiant/dashboard-etudiant/dashboard-etudiant';
import { authGuard } from './guards/auth-guard';
import { DashboardFormateur } from './pages/formateur/dashboard-formateur/dashboard-formateur';
import { DashboardAdmin } from './pages/administratif/dashboard-admin/dashboard-admin';
import { RegisterEtudiant } from './pages/auth/register-etudiant/register-etudiant';
import { Register } from './pages/auth/register/register';
import { MesStages } from './pages/etudiant/stages/mes-stages/mes-stages';
import { Partenaires } from './pages/etudiant/partenaires/partenaires/partenaires';
import { MaFormation } from './pages/etudiant/formation/ma-formation/ma-formation';
import { FormateursFormation } from './pages/etudiant/formation/formateurs-formation/formateurs-formation';
import { MesEmploisDuTemps } from './pages/etudiant/emploi-du-temps/mes-emplois-du-temps/mes-emplois-du-temps';
import { ComptesRendus } from './pages/etudiant/communication/comptes-rendus/comptes-rendus';
import { Notifications } from './pages/etudiant/communication/notifications/notifications';
import { MonProfil } from './pages/etudiant/profil/mon-profil/mon-profil';
import { LayoutEtudiant } from './layouts/layout-etudiant/layout-etudiant';
import { AjouterBilanStage } from './pages/etudiant/stages/ajouter-bilan-stage/ajouter-bilan-stage';
import { LayoutFormateur } from './layouts/layout-formateur/layout-formateur';
import { ProfilFormateur } from './pages/formateur/profil/profil-formateur/profil-formateur';
import { MesFormationsFormateur } from './pages/formateur/formations/mes-formations-formateur/mes-formations-formateur';
import { EmploiDuTempsFormateur } from './pages/formateur/emploi-du-temps/emploi-du-temps-formateur/emploi-du-temps-formateur';
import { ComptesRendusFormateur } from './pages/formateur/comptes-rendus/comptes-rendus-formateur/comptes-rendus-formateur';
import { ReunionsFormateur } from './pages/formateur/reunions/reunions-formateur/reunions-formateur';
import { AjouterReunionFormateur } from './pages/formateur/reunions/ajouter-reunion-formateur/ajouter-reunion-formateur';
import { NotificationFormateur } from './pages/formateur/notification/notification-formateur/notification-formateur';
import { EtudiantsFormateur } from './pages/formateur/etudiants/etudiants-formateur/etudiants-formateur';



export const routes: Routes = [

    {
        path: '',
        component: Home,
        
    },
    {
      path: 'home',
      component: Home,
      
  },
    {
        path: 'login',
        component: Login,
        
    },
    {
        path: 'dashboardEtudiant',
        component: LayoutEtudiant,
        children: [

          { path: '', component: DashboardEtudiant },
      
          { path: 'profil', component: MonProfil },
      
          { path: 'formation', component: MaFormation },
      
          { path: 'formateurs', component: FormateursFormation },
      
          { path: 'emploi-du-temps', component: MesEmploisDuTemps },
      
          { path: 'comptes-rendus', component: ComptesRendus },
      
          { path: 'notifications', component: Notifications },
      
          { path: 'stages', component: MesStages },

          { path: 'ajouterStage', component:AjouterBilanStage},
      
          { path: 'partenaires', component: Partenaires }
        ]
      },
      {
        path: 'dashboardFormateur',
        component: LayoutFormateur,
        children: [

          { path: '', component: DashboardFormateur },
      
          { path: 'dashboardFormateur/profil', component: ProfilFormateur },
      
          { path: 'dashboardFormateur/formation', component: MesFormationsFormateur },

          { path: 'dashboardFormateur/etudiants', component: EtudiantsFormateur },

          { path: 'dashboardFormateur/emploi-du-temps', component: EmploiDuTempsFormateur },
      
          { path: 'dashboardFormateur/comptes-rendus', component: ComptesRendusFormateur },
      
          { path: 'dashboardFormateur/notifications', component: NotificationFormateur },

          { path: 'dashboardFormateur/reunions', component: ReunionsFormateur },

          { path: 'dashboardFormateur/ajouter-reunions', component: AjouterReunionFormateur },
      
          { path: 'dashboardFormateur/partenaires', component: ReunionsFormateur }
        ]
      },
    
      {
        path: 'dashboardAdministratif',
        component: DashboardAdmin
      },
      {
        path: 'inscriptionEtudiant',
        component: RegisterEtudiant
      },
      {
        path: 'register',
        component: Register
      }
];
