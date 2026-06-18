import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

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
      `${this.apiUrl}/partenaires`,
      this.headers()
    );

  }

  getById(id:number) {

    return this.http.get(
      `${this.apiUrl}/partenaires/${id}`,
      this.headers()
    );

  }

  ajouter(partenaire:any) {

    return this.http.post(
      `${this.apiUrl}/partenaires`,
      partenaire,
      this.headers()
    );

  }

  modifier(id:number, partenaire:any) {

    return this.http.put(
      `${this.apiUrl}/partenaires/${id}`,
      partenaire,
      this.headers()
    );

  }

  supprimer(id:number) {

    return this.http.delete(
      `${this.apiUrl}/partenaires/${id}`,
      this.headers()
    );

  }

}