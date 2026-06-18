import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers() {

    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getStats() {

    return this.http.get(
      `${this.apiUrl}/dashboard`,
      this.headers()
    );
  }

  exportPdf() {

    return this.http.get(
      `${this.apiUrl}/dashboard/export/pdf`,
      {
        ...this.headers(),
        responseType: 'blob'
      }
    );
  }

  exportExcel() {

    return this.http.get(
      `${this.apiUrl}/dashboard/export/excel`,
      {
        ...this.headers(),
        responseType: 'blob'
      }
    );
  }
}