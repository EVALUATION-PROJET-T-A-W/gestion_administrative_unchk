import {Component, OnInit} from '@angular/core';
import {ReunionService} from '@/app/services/reunion';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-reunion',
  imports: [
    FormsModule
  ],
  templateUrl: './reunion.html',
  styleUrl: './reunion.css',
})
export class Reunion implements OnInit {

  reunions: any[] = [];

  reunion: any = {
    id: null,
    titre: '',
    typeReunion: '',
    dateReunion: '',
    compteRendu: ''
  };

  modeEdition = false;

  constructor(private service: ReunionService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.reunions = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.reunion.id, this.reunion)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.reunion)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(r: any) {
    this.reunion = { ...r };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cette réunion ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.reunion = {
      id: null,
      titre: '',
      typeReunion: '',
      dateReunion: '',
      compteRendu: ''
    };

    this.modeEdition = false;
  }

}
