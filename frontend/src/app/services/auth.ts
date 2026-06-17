import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(
      `${this.apiUrl}/auth/login`,
      data
    );
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  
  logout() {
    return this.http.post(
      `${this.apiUrl}/auth/logout`,
      {}
    );
  }

  getProfil() {
    return this.http.get(
      `${this.apiUrl}/profil/me`,
      {
        headers: {
          Authorization: `Bearer ${this.getToken()}`
        }
      }
    );
  }
  modifierProfil(formData: FormData) {
    const token = localStorage.getItem('token');
  
    return this.http.put(
      `${this.apiUrl}/profil/modifier`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}