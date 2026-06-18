import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Formation {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFormations() {
    return this.http.get<any[]>(
      `${this.apiUrl}/formations`
    );
  }

  
}
