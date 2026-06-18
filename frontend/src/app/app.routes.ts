import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { DashboardEtudiant } from './pages/etudiant/dashboard-etudiant/dashboard-etudiant';
import { authGuard } from './guards/auth-guard';
import { DashboardFormateur } from './pages/formateur/dashboard-formateur/dashboard-formateur';
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
import { MesCoursComponent } from './pages/etudiant/cours/cours';
import { DashboardAdministratif } from './pages/administratif/dashboard-administratif/dashboard-administratif';
import { ListeEtudiantsAdministratif } from './pages/administratif/etudiants/liste-etudiants-administratif/liste-etudiants-administratif';
import { AjouterEtudiantAdministratif } from './pages/administratif/etudiants/ajouter-etudiant-administratif/ajouter-etudiant-administratif';
import { ListeFormateursAdministratif } from './pages/administratif/formateurs/liste-formateurs-administratif/liste-formateurs-administratif';
import { AjouterFormateurAdministratif } from './pages/administratif/formateurs/ajouter-formateur-administratif/ajouter-formateur-administratif';
import { ListeFormationsAdministratif } from './pages/administratif/formations/liste-formations-administratif/liste-formations-administratif';
import { AjouterFormationAdministratif } from './pages/administratif/formations/ajouter-formation-administratif/ajouter-formation-administratif';
import { ListeDocumentsAdministratif } from './pages/administratif/documents/liste-documents-administratif/liste-documents-administratif';
import { AjouterDocumentAdministratif } from './pages/administratif/documents/ajouter-document-administratif/ajouter-document-administratif';
import { ListeEmploisAdministratif } from './pages/administratif/emplois/liste-emplois-administratif/liste-emplois-administratif';
import { AjouterEmploiAdministratif } from './pages/administratif/emplois/ajouter-emploi-administratif/ajouter-emploi-administratif';
import { ListeStagesAdministratif } from './pages/administratif/stages/liste-stages-administratif/liste-stages-administratif';
import { ListePartenairesAdministratif } from './pages/administratif/partenaires/liste-partenaires-administratif/liste-partenaires-administratif';
import { ComptesRendusAdministratif } from './pages/administratif/communication/comptes-rendus-administratif/comptes-rendus-administratif';
import { CirculairesAdministratif } from './pages/administratif/communication/circulaires-administratif/circulaires-administratif';
import { NotificationsAdministratif } from './pages/administratif/communication/notifications-administratif/notifications-administratif';
import { LayoutAdministratif } from './layouts/layout-administratif/layout-administratif';
import { ReunionAdministratif } from './pages/administratif/reunion-administratif/reunion-administratif';
import { CoursAdministratif } from './pages/administratif/cours-administratif/cours-administratif';



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
      
          { path: 'partenaires', component: Partenaires },

          { path: 'cours', component: MesCoursComponent }
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
      
          { path: 'dashboardFormateur/partenaires', component: ReunionsFormateur },
          { path: 'dashboardFormateur/cours', component: MesCoursComponent }
          
          
        ]
      },
    
      {
        path: 'dashboardAdministratif',
        component: LayoutAdministratif,
        children: [

          {
            path: '',
            component: DashboardAdministratif
          },
          {
            path: 'dashboardAdministratif/etudiants',
            component: ListeEtudiantsAdministratif
          },
          {
            path: 'dashboardAdministratif/ajouter-etudiant',
            component: AjouterEtudiantAdministratif
          },
          {
            path: 'dashboardAdministratif/formateurs',
            component: ListeFormateursAdministratif
          },
          {
            path: 'dashboardAdministratif/ajouter-formateur',
            component: AjouterFormateurAdministratif
          },
          {
            path: 'dashboardAdministratif/formations',
            component: ListeFormationsAdministratif
          },
          {
            path: 'dashboardAdministratif/ajouter-formation',
            component: AjouterFormationAdministratif
          },
          {
            path: 'dashboardAdministratif/documents',
            component: ListeDocumentsAdministratif
          },
          {
            path: 'dashboardAdministratif/ajouter-document',
            component: AjouterDocumentAdministratif
          },
          {
            path: 'dashboardAdministratif/emplois',
            component: ListeEmploisAdministratif
          },
          {
            path: 'dashboardAdministratif/ajouter-emploi',
            component: AjouterEmploiAdministratif
          },
          {
            path: 'dashboardAdministratif/stages',
            component: ListeStagesAdministratif
          },
          {
            path: 'dashboardAdministratif/partenaires',
            component: ListePartenairesAdministratif
          },
          {
            path: 'dashboardAdministratif/comptes-rendus',
            component: ComptesRendusAdministratif
          },
          {
            path: 'dashboardAdministratif/circulaires',
            component: CirculairesAdministratif
          },
          {
            path: 'dashboardAdministratif/notifications',
            component: NotificationsAdministratif
          },
          {
            path: 'dashboardAdministratif/reunion',
            component: ReunionAdministratif
          },
          {
            path: 'dashboardAdministratif/cours',
            component: CoursAdministratif
          }
        ]
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
