import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

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

  lister() {
    return this.http.get(
      `${this.apiUrl}/formateurs`,
      this.headers()
    );
  }

  afficher(id: number) {
    return this.http.get(
      `${this.apiUrl}/formateurs/${id}`,
      this.headers()
    );
  }

  ajouter(formateur: any) {
    return this.http.post(
      `${this.apiUrl}/formateurs`,
      formateur,
      this.headers()
    );
  }

  modifier(id: number, formateur: any) {
    return this.http.put(
      `${this.apiUrl}/formateurs/${id}`,
      formateur,
      this.headers()
    );
  }

  supprimer(id: number) {
    return this.http.delete(
      `${this.apiUrl}/formateurs/${id}`,
      this.headers()
    );
  }

}