import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Profil {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  mesFormations() {
    const token = localStorage.getItem('token');
    return this.http.get(
      `${this.apiUrl}/profil/mes-formations`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  mesEmplois() {
    const token = localStorage.getItem('token');
    return this.http.get(
      `${this.apiUrl}/profil/mes-emplois`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
