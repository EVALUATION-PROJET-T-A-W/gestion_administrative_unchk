import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class Inscription {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  inscrireEtudiant(formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/inscription/etudiant`,
      formData
    );
  }

  inscrireFormateur(formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/inscription/formateur`,
      formData
    );
  }

  inscrireAdministratif(formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/inscription/administratif`,
      formData
    );
  }
}
