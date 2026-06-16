import { Profil } from '@/app/services/profil';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-formation',
  imports: [CommonModule],
  templateUrl: './ma-formation.html',
  styleUrl: './ma-formation.css',
})
export class MaFormation implements OnInit{
  formations: any[] = [];

  constructor(
    private profil: Profil
  ) {}

  ngOnInit(): void {

    this.profil.mesFormations()
      .subscribe({

        next: (data: any) => {

          this.formations = data;

          console.log(data);
        },

        error: (err) => {
          console.error(err);
        }
      });
  }
}