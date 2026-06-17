import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  
  private apiUrl =
  `${environment.apiUrl}/notifications`;

constructor(
  private http: HttpClient
) {}

private getHeaders(): HttpHeaders {

  const token =
    localStorage.getItem('token');

  return new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
}

mesNotifications(): Observable<any[]> {

  return this.http.get<any[]>(

    this.apiUrl,

    {
      headers: this.getHeaders()
    }
  );
}

marquerCommeLue(
  id: number
): Observable<any> {

  return this.http.put(

    `${this.apiUrl}/${id}/lire`,

    {},

    {
      headers: this.getHeaders()
    }
  );
}
}