import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class Formateur {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMesEmploisDuTemps() {
    const token = localStorage.getItem('token');
  
    return this.http.get<any[]>(
      `${this.apiUrl}/formateurs/mes-emplois-du-temps`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  getMesFormations() {
    const token = localStorage.getItem('token');
  
    console.log("TOKEN ANGULAR =", token);
    return this.http.get<any[]>( `${this.apiUrl}/formateurs/mes-formations`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  getDashboard() {
    const token = localStorage.getItem('token');
  
    return this.http.get<any>(
      `${this.apiUrl}/formateurs/dashboard`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}