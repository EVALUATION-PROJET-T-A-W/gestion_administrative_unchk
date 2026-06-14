import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://localhost:8080/api/utilisateurs';

  constructor(private http: HttpClient) {}

  inscrireEtudiant(data: FormData) {
    return this.http.post(`${this.apiUrl}/etudiant`, data);
  }

  inscrireFormateur(data: FormData) {
    return this.http.post(`${this.apiUrl}/formateur`, data);
  }

  inscrireAdministratif(data: FormData) {
    return this.http.post(`${this.apiUrl}/administratif`, data);
  }


  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
