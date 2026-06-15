import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {

  private apiUrl = 'http://localhost:8080/api/reunions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(reunion: any): Observable<any> {
    return this.http.post(this.apiUrl, reunion);
  }

  update(id: number, reunion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, reunion);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
