import {Component, OnInit} from '@angular/core';
import {NotificationService} from '@/app/services/notification';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-notification',
  imports: [
    FormsModule
  ],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification implements OnInit {

  notifications: any[] = [];

  notification: any = {
    id: null,
    message: '',
    dateNotification: '',
    etat: '',
    utilisateurId: null
  };

  modeEdition = false;

  constructor(private service: NotificationService) {}

  ngOnInit() {
    this.lister();
  }

  // LISTE
  lister() {
    this.service.getAll().subscribe(data => {
      this.notifications = data;
    });
  }

  // AJOUT + MODIFIER
  enregistrer() {

    if (this.modeEdition) {

      this.service.update(this.notification.id, this.notification)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    } else {

      this.service.create(this.notification)
        .subscribe(() => {
          this.lister();
          this.reset();
        });

    }
  }

  // MODIFIER
  modifier(n: any) {
    this.notification = { ...n };
    this.modeEdition = true;
  }

  // SUPPRIMER
  supprimer(id: number) {

    if (confirm('Voulez-vous supprimer cette notification ?')) {

      this.service.delete(id)
        .subscribe(() => {
          this.lister();
        });

    }
  }

  // RESET
  reset() {
    this.notification = {
      id: null,
      message: '',
      dateNotification: '',
      etat: '',
      utilisateurId: null
    };

    this.modeEdition = false;
  }

}
