import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Stage {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  mesStages() {
    const token = localStorage.getItem('token');
    return this.http.get(
      `${this.apiUrl}/stages/mes-stages`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  ajouter(stage: any, etudiantId: number) {
    const token = localStorage.getItem('token');
    return this.http.post(
      `${this.apiUrl}/stages/${etudiantId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      stage
    );
  }

  modifier(id: number, stage: any) {
    const token = localStorage.getItem('token');
    return this.http.put(
      `${this.apiUrl}/stages/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      stage
    );
  }

  supprimer(id: number) {
    const token = localStorage.getItem('token');
    return this.http.delete(
      `${this.apiUrl}/stages/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}