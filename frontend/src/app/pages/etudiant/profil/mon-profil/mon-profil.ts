import { Auth } from '@/app/services/auth';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-profil',
  imports: [CommonModule],
  templateUrl: './mon-profil.html',
  styleUrl: './mon-profil.css',
})
export class MonProfil {


  profil: any;

  constructor(private auth: Auth) {}

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
}
