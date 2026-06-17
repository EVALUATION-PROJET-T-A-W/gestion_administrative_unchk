import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class Formateur {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  mesEmplois() {

    const token = localStorage.getItem('token');
  
    console.log("TOKEN ANGULAR =", token);
  
    return this.http.get(
      `${this.apiUrl}/profil/mes-emplois`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}