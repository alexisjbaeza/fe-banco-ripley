import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  realizarTransferencia(cuenta_destino: String, monto: number) {
    const httpOptions = this.authService.obtenerHeaders();
    const body = { cuenta_destino, monto };
    return this.http.post(`http://localhost:8080/api/transferencias/`, body, httpOptions);
  }
}
