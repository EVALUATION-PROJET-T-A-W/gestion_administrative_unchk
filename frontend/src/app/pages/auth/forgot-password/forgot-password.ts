import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@/app/services/auth';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

  email: string = '';
  message: string = '';

  constructor(private service: AuthService) {}

  envoyer() {
    this.service.forgotPassword(this.email).subscribe({
      next: () => {
        this.message = 'Email de réinitialisation envoyé ✔';
      },
      error: () => {
        this.message = 'Erreur lors de l’envoi ❌';
      }
    });
  }
}
