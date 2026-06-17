import { Auth } from '@/app/services/auth';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-formateur',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-formateur.html',
  styleUrl: './layout-formateur.css',
})
export class LayoutFormateur {
  nom = '';
  prenom = '';
  photo = '';
  profil: any;

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.auth.getProfil().subscribe({
      next: (data) => {
        this.profil = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }



  logout() {

    localStorage.clear();

    this.router.navigate(['/home']);
  }
}
