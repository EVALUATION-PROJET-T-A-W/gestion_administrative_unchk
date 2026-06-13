import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  utilisateur = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    photo: '',
  };

  constructor(private router: Router) {}

  register() {

    if (this.utilisateur.password !== this.utilisateur.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    localStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));

    alert('Inscription réussie');

    // 🔥 UNE SEULE NAVIGATION
    this.router.navigate(['/login']);
  }
}
