import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@/app/services/auth';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';
  error = '';

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  seConnecter() {

    const data = {
      email: this.email,
      motDePasse: this.password
    };

    this.service.login(data).subscribe({
      next: (res: any) => {

        // option : stocker token
        localStorage.setItem('token', res.token);

        // redirection dashboard
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect';
      }
    });
  }
}
