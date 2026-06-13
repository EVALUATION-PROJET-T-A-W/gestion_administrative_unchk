import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsService {

  private apiUrl = 'http://localhost:8080/api/emplois-du-temps';

  constructor(private http: HttpClient) {}

  // Lister
  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter
  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  // Modifier
  update(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Supprimer
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
