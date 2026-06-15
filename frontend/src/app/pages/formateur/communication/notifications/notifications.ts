import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit {

  notifications: any[] = [];

  ngOnInit(): void {

    // données temporaires
    this.notifications = [
      {
        id: 1,
        titre: 'Nouveau message',
        contenu: 'Vous avez reçu un nouveau message de l’administration.',
        date: '2026-06-10',
        lu: false
      },
      {
        id: 2,
        titre: 'Stage validé',
        contenu: 'Votre stage a été validé avec succès.',
        date: '2026-06-12',
        lu: true
      },
      {
        id: 3,
        titre: 'Circulaire',
        contenu: 'Une nouvelle circulaire est disponible.',
        date: '2026-06-14',
        lu: false
      }
    ];

  }

  marquerCommeLu(notification: any) {
    notification.lu = true;
  }

  supprimer(id: number) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

}
