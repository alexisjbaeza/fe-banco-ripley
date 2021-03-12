import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  obtenerSaldo() {
    const httpOptions = this.authService.obtenerHeaders();
    return this.http.get(`http://localhost:8080/api/saldo/`, httpOptions);
  }
}
