import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mon-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mon-profil.html',
  styleUrl: './mon-profil.css',
})
export class MonProfil implements OnInit {

  utilisateur: any;

  ngOnInit(): void {

    // Données temporaires
    this.utilisateur = {
      nom: 'Diop',
      prenom: 'Moussa',
      email: 'moussa.diop@gmail.com',
      telephone: '771234567',
      role: 'ETUDIANT',
      photo: 'https://via.placeholder.com/150'
    };

  }

}
