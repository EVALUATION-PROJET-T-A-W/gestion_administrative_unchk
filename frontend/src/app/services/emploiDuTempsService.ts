import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsService {

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
      `${this.apiUrl}/emplois-du-temps`,
      this.headers()
    );

  }

  getById(id: number) {

    return this.http.get(
      `${this.apiUrl}/emplois-du-temps/${id}`,
      this.headers()
    );

  }

  ajouter(emploi: any) {

    return this.http.post(
      `${this.apiUrl}/emplois-du-temps`,
      emploi,
      this.headers()
    );

  }

  modifier(id: number, emploi: any) {

    return this.http.put(
      `${this.apiUrl}/emplois-du-temps/${id}`,
      emploi,
      this.headers()
    );

  }

  supprimer(id: number) {

    return this.http.delete(
      `${this.apiUrl}/emplois-du-temps/${id}`,
      this.headers()
    );

  }

}