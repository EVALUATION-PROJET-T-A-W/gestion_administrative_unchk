import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {EtudiantService} from '@/app/services/etudiant';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant implements OnInit {

  etudiants: any[] = [];

  etudiant: any = {
    id: null,
    ine: '',
    promotion: '',
    anneeDebut: null,
    anneeSortie: null,
    formationId: null
  };

  modeEdition = false;

  constructor(private service: EtudiantService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.etudiants = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.etudiant.id, this.etudiant)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.etudiant)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(e: any) {
    this.etudiant = { ...e };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cet étudiant ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.etudiant = {
      id: null,
      ine: '',
      promotion: '',
      anneeDebut: null,
      anneeSortie: null,
      formationId: null
    };

    this.modeEdition = false;
  }
}
