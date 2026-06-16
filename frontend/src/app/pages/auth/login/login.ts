import { Auth } from '@/app/services/auth';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink, FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  motDePasse = '';
  errorMessage = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  seConnecter() {

    const data = {
      email: this.email,
      motDePasse: this.motDePasse
    };
  
    this.auth.login(data).subscribe({
  
      next: (response: any) => {

        console.log("Réponse API :", response);
      
        this.auth.saveToken(response.token);
      
        const role = response.role;
      
        console.log("Role :", role);
      
        if (role === "ETUDIANT") {
      
          this.router.navigate(['/dashboardEtudiant']);
      
        } else if (role === "FORMATEUR") {
      
          this.router.navigate(['/dashboardFormateur']);
      
        } else if (role === "ADMINISTRATIF") {
      
          this.router.navigate(['/dashboardAdministratif']);
      
        }
      
      },
  
      error: (err) => {
        console.log("ERREUR LOGIN:", err);
      
        this.errorMessage = 'Email ou mot de passe incorrect';
      
        console.log("errorMessage =", this.errorMessage);
      }
    });
  }
}