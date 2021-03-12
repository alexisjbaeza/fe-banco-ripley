import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getMovimientos() {
    const httpOptions = this.authService.obtenerHeaders();
    return this.http.get(`http://localhost:8080/api/movimientos/`, httpOptions);
  }

}




