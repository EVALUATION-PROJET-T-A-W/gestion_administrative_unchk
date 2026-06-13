import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private apiUrl = 'http://localhost:8080/api/formateurs';

  constructor(private http: HttpClient) {}

  // LISTE
  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // CREATE
  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  // UPDATE
  update(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
