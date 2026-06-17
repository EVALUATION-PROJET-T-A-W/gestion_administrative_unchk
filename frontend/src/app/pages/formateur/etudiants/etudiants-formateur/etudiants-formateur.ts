import { Etudiant } from '@/app/services/etudiant';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiants-formateur',
  imports: [CommonModule],
  templateUrl: './etudiants-formateur.html',
  styleUrl: './etudiants-formateur.css',
})
export class EtudiantsFormateur implements OnInit {

  etudiants: any[] = [];
  photo: any;
  constructor(
    private etudiant: Etudiant
  ) {}

  ngOnInit(): void {

    this.etudiant
      .lister()
      .subscribe({

        next: (data: any) => {

          this.etudiants = data;
        },

        error: (err) => {

          console.error(err);
        }
      });
  }
}