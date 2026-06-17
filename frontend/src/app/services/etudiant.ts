import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Etudiant {

  private dashboardUrl =
    `${environment.apiUrl}/dashboard-etudiant`;

  private etudiantUrl =
    `${environment.apiUrl}/etudiants`;

  constructor(
    private http: HttpClient
  ) {}

  getDashboard() {

    const token =
      localStorage.getItem('token');

    return this.http.get(
      this.dashboardUrl,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  lister() {

    const token =
      localStorage.getItem('token');

    return this.http.get(
      this.etudiantUrl,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

}