import { Component, OnInit } from '@angular/core';
import { Notification } from '@/app/services/notification';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification-formateur',
  imports: [CommonModule],
  templateUrl: './notification-formateur.html',
  styleUrl: './notification-formateur.css',
})
export class NotificationFormateur  implements OnInit {

  notifications: any[] = [];

  errorMessage = '';

  constructor(
    private notification:
    Notification
  ) {}

  ngOnInit(): void {

    this.chargerNotifications();
  }

  chargerNotifications(): void {

    this.notification
      .mesNotifications()
      .subscribe({

        next: (data: any[]) => {

          console.log(data);

          this.notifications = data;
        },

        error: (err) => {

          console.error(err);

          this.errorMessage =
            'Erreur lors du chargement';
        }
      });
  }

  marquerCommeLue(id: number): void {

    this.notification
      .marquerCommeLue(id)
      .subscribe({

        next: () => {

          this.notifications =
            this.notifications.map(n => {

              if (n.id === id) {

                n.lue = true;
              }

              return n;
            });
        },

        error: (err) => {

          console.error(err);
        }
      });
  }
}
