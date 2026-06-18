import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers() {

    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };

  }

  getAll() {
    return this.http.get(
      `${this.apiUrl}/formations`,
      this.headers()
    );
  }

  getById(id: number) {
    return this.http.get(
      `${this.apiUrl}/formations/${id}`,
      this.headers()
    );
  }

  ajouter(formation: any) {
    return this.http.post(
      `${this.apiUrl}/formations`,
      formation,
      this.headers()
    );
  }

  modifier(id: number, formation: any) {
    return this.http.put(
      `${this.apiUrl}/formations/${id}`,
      formation,
      this.headers()
    );
  }

  supprimer(id: number) {
    return this.http.delete(
      `${this.apiUrl}/formations/${id}`,
      this.headers()
    );
  }
}