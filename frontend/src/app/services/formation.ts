import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = 'http://localhost:8080/api/formations';

  constructor(private http: HttpClient) {}

  // Liste
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter
  create(formation: any): Observable<any> {
    return this.http.post(this.apiUrl, formation);
  }

  // Modifier
  update(id: number, formation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, formation);
  }

  // Supprimer
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
