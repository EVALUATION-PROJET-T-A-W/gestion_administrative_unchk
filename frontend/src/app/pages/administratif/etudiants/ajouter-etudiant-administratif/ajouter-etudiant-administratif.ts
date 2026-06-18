import { EtudiantService } from '@/app/services/etudiantService';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-etudiant-administratif',
  imports: [FormsModule],
  templateUrl: './ajouter-etudiant-administratif.html',
  styleUrl: './ajouter-etudiant-administratif.css',
})
export class AjouterEtudiantAdministratif {
  etudiant = {
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    telephone: '',
    ine: '',
    promotion: '',
    anneeDebut: '',
    anneeSortie: ''
  };

  constructor(
    private etudiantService: EtudiantService,
    private router: Router
  ) {}

  ajouter(form: NgForm) {

    this.etudiantService.create(this.etudiant)
      .subscribe({

        next: () => {

          alert('Étudiant ajouté avec succès');

          form.resetForm();

          this.router.navigate([
            '/dashboardAdministratif/etudiants'
          ]);

        },

        error: (err) => {

          console.error(err);

          alert('Erreur lors de l\'ajout');

        }

      });

  }

}
