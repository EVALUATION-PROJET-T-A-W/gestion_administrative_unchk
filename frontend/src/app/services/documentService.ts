import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

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

  // Liste des documents
  getAll() {

    return this.http.get(
      `${this.apiUrl}/documents`,
      this.headers()
    );

  }

  // Détail d'un document
  getById(id: number) {

    return this.http.get(
      `${this.apiUrl}/documents/${id}`,
      this.headers()
    );

  }

  // Ajouter
  ajouter(formData: FormData) {

    return this.http.post(
      `${this.apiUrl}/documents`,
      formData,
      this.headers()
    );

  }

  // Modifier
  modifier(id: number, formData: FormData) {

    return this.http.put(
      `${this.apiUrl}/documents/${id}`,
      formData,
      this.headers()
    );

  }

  // Supprimer
  supprimer(id: number) {

    return this.http.delete(
      `${this.apiUrl}/documents/${id}`,
      this.headers()
    );

  }

  // Télécharger
  telecharger(id: number) {

    const token = localStorage.getItem('token');

    this.http.get(
      `${this.apiUrl}/documents/telecharger/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        }),
        responseType: 'blob'
      }
    ).subscribe(blob => {

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');

      link.href = url;

      link.download = 'document';

      link.click();

      window.URL.revokeObjectURL(url);

    });

  }

}