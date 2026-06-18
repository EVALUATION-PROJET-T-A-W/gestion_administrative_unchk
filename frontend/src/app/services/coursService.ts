import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';

export interface Cours {
  id: number;
  titre: string;
  description: string;
  dateCours: string;
  supportCours: string;
  formation?: any;
}

@Injectable({
  providedIn: 'root',
})
export class CoursService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMesCours(): Observable<Cours[]> {

    const token = localStorage.getItem('token');

    console.log('TOKEN =', token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Cours[]>(
      `${this.apiUrl}/cours/mes-cours`,
      { headers }
    );
  }
  getMesCoursEtudiant(): Observable<Cours[]> {

    const token = localStorage.getItem('token');

    console.log('TOKEN =', token);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Cours[]>(
      `${this.apiUrl}/cours/mes-cours-etudiant`,
      { headers }
    );
  }
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
      `${this.apiUrl}/cours`,
      this.headers()
    );

  }

  getById(id: number) {

    return this.http.get(
      `${this.apiUrl}/cours/${id}`,
      this.headers()
    );

  }

  ajouter(cours: any) {

    return this.http.post(
      `${this.apiUrl}/cours`,
      cours,
      this.headers()
    );

  }

  modifier(id: number, cours: any) {

    return this.http.put(
      `${this.apiUrl}/cours/${id}`,
      cours,
      this.headers()
    );

  }

  supprimer(id: number) {

    return this.http.delete(
      `${this.apiUrl}/cours/${id}`,
      this.headers()
    );

  }
}