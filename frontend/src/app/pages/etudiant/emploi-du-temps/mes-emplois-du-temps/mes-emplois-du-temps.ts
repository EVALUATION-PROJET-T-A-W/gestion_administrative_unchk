import { Profil } from '@/app/services/profil';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-emplois-du-temps',
  imports: [CommonModule],
  templateUrl: './mes-emplois-du-temps.html',
  styleUrl: './mes-emplois-du-temps.css',
})
export class MesEmploisDuTemps {

  emplois: any[] = [];

  constructor(
    private profil: Profil
  ) {}

  ngOnInit(): void {

    this.profil.mesEmplois()
      .subscribe({

        next: (data: any) => {

          this.emplois = data;

          console.log(data);
        },

        error: (err) => {
          console.error(err);
        }
      });
  }
}