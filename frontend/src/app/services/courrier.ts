import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {

  private apiUrl = 'http://localhost:8080/api/courriers';

  constructor(private http: HttpClient) {}

  // LISTE
  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // AJOUT
  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  // MODIFIER
  update(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // SUPPRIMER
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
