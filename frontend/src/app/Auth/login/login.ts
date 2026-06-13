import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const utilisateur = JSON.parse(
      localStorage.getItem('utilisateur') || '{}'
    );

    if (
      this.email === utilisateur.email &&
      this.password === utilisateur.password
    ) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}
