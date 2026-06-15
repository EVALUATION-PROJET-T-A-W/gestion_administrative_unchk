import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private apiUrl = 'http://localhost:8080/api/partenaires';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
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

export class Partenaire {
}
