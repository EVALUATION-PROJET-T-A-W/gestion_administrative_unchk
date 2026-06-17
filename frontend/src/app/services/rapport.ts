import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class Rapport {

  private apiUrl = `${environment.apiUrl}/rapports`;

  constructor(
    private http: HttpClient
  ) {}

  private getHeaders(): HttpHeaders {

    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  publier(
    reunionId: number,
    rapport: any
  ): Observable<any> {

    return this.http.post<any>(

      `${this.apiUrl}/${reunionId}`,

      rapport,

      {
        headers: this.getHeaders()
      }
    );
  }

  lister(): Observable<any[]> {

    return this.http.get<any[]>(

      this.apiUrl,

      {
        headers: this.getHeaders()
      }
    );
  }

  afficher(
    id: number
  ): Observable<any> {

    return this.http.get<any>(

      `${this.apiUrl}/${id}`,

      {
        headers: this.getHeaders()
      }
    );
  }

  parReunion(
    reunionId: number
  ): Observable<any[]> {

    return this.http.get<any[]>(

      `${this.apiUrl}/reunion/${reunionId}`,

      {
        headers: this.getHeaders()
      }
    );
  }
}