import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

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
      `${this.apiUrl}/reunions`,
      this.headers()
    );

  }

  getById(id: number) {

    return this.http.get(
      `${this.apiUrl}/reunions/${id}`,
      this.headers()
    );

  }

  ajouter(formationId: number, reunion: any) {

    return this.http.post(
      `${this.apiUrl}/reunions/${formationId}`,
      reunion,
      this.headers()
    );

  }

}