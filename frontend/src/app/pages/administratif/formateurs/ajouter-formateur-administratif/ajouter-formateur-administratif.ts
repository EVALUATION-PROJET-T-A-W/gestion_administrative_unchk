import { FormateurService } from '@/app/services/formateurService';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-formateur-administratif',
  imports: [FormsModule],
  templateUrl: './ajouter-formateur-administratif.html',
  styleUrl: './ajouter-formateur-administratif.css',
})
export class AjouterFormateurAdministratif {

  formateur = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    telephone: '',
    specialite: '',
    grade: '',
    departement: '',
    typeFormateur: ''
  };

  constructor(
    private formateurService: FormateurService,
    private router: Router
  ) {}

  ajouterFormateur(form: NgForm) {

    this.formateurService
      .ajouter(this.formateur)
      .subscribe({

        next: () => {

          alert('Formateur ajouté avec succès');

          form.resetForm();

          this.router.navigate([
            '/dashboardAdmin/formateurs'
          ]);

        },

        error: (err) => {

          console.error(err);

        }

      });

  }

}