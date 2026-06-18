import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {

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
      `${this.apiUrl}/stages`,
      this.headers()
    );

  }

  getById(id: number) {

    return this.http.get(
      `${this.apiUrl}/stages/${id}`,
      this.headers()
    );

  }

  ajouter(stage: any) {

    return this.http.post(
      `${this.apiUrl}/stages`,
      stage,
      this.headers()
    );

  }

  modifier(id: number, stage: any) {

    return this.http.put(
      `${this.apiUrl}/stages/${id}`,
      stage,
      this.headers()
    );

  }

  supprimer(id: number) {

    return this.http.delete(
      `${this.apiUrl}/stages/${id}`,
      this.headers()
    );

  }

}