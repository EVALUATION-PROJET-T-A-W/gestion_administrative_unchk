import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders() {

    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };

  }

  // Liste des étudiants
  getAll(): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/etudiants`,
      this.getHeaders()
    );

  }

  // Détail étudiant
  getById(id: number): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/etudiants/${id}`,
      this.getHeaders()
    );

  }

  // Ajouter étudiant
  create(etudiant: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/etudiants`,
      etudiant,
      this.getHeaders()
    );

  }

  // Modifier étudiant
  update(id: number, etudiant: any): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/etudiants/${id}`,
      etudiant,
      this.getHeaders()
    );

  }

  // Supprimer étudiant
  supprimer(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/etudiants/${id}`,
      this.getHeaders()
    );

  }

}