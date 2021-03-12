import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  postCarga(monto: number) {
    const httpOptions = this.authService.obtenerHeaders();
    const body = { monto };
    return this.http.post(`http://localhost:8080/api/cargas/`, body, httpOptions);
  }
}
