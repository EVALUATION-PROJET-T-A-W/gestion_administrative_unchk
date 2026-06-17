import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Reunion {
  private apiUrl = `${environment.apiUrl}/reunions`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }

  ajouter(reunion: any, formationId: number) {
    return this.http.post(
      `${this.apiUrl}/${formationId}`,
      reunion,
      this.getAuthHeaders()
    );
  }

  lister() {
    return this.http.get(
      this.apiUrl,
      this.getAuthHeaders()
    );
  }

  afficher(id: number) {
    return this.http.get(
      `${this.apiUrl}/${id}`,
      this.getAuthHeaders()
    );
  }

  parFormation(formationId: number) {
    return this.http.get(
      `${this.apiUrl}/formation/${formationId}`,
      this.getAuthHeaders()
    );
  }
}