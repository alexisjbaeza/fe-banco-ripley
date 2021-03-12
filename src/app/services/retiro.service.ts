import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RetiroService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  realizarRetiro(monto: number) {
    const httpOptions = this.authService.obtenerHeaders();
    const body = { monto };
    return this.http.post(`http://localhost:8080/api/retiros/`, body, httpOptions);
  }

}
