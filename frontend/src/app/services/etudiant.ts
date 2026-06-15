import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = 'http://localhost:8080/api/etudiants';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
