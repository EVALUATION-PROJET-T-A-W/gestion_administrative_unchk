
import { MonProfil } from '@/app/pages/etudiant/profil/mon-profil/mon-profil';
import { Auth } from '@/app/services/auth';

import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-etudiant',
  imports: [RouterOutlet,
    RouterLink,
    MonProfil
  ],
  templateUrl: './layout-etudiant.html',
  styleUrl: './layout-etudiant.css',
})
export class LayoutEtudiant {
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
