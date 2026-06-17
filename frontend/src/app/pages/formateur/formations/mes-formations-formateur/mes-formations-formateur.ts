import { Profil } from '@/app/services/profil';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-formations-formateur',
  imports: [CommonModule],
  templateUrl: './mes-formations-formateur.html',
  styleUrl: './mes-formations-formateur.css',
})
export class MesFormationsFormateur {
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