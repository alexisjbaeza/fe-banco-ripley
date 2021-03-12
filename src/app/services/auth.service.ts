import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userToken: string;

  login(rut: string, password: string) {
    const body = { rut, password };
    return this.http.post(`http://localhost:8080/api/auth/login`, body).pipe(
      map(resp => {
        console.log(resp)
        if (resp['ok']) {
          this.guardarToken(resp['token']);
        }
        return resp;
      })
    );
  }

  getCuenta() {
    const httpOptions = this.obtenerHeaders();
    return this.http.get(`http://localhost:8080/api/cuentas/`, httpOptions);
  }

  crearCuenta(nombre: String, rut: String, correo: String, password: String) {
    const httpOptions = this.obtenerHeaders();
    const body = { nombre, rut, correo, password };
    return this.http.post(`http://localhost:8080/api/cuentas/`, body, httpOptions);
  }


  logout() {
    localStorage.removeItem('token');
  }


  private guardarToken(token: string) {

    this.userToken = token;
    localStorage.setItem('token', token);

  }

  leerToken() {

    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;

  }

  estaAutenticado(): boolean {

    if (this.leerToken().length < 2) {
      return false;
    } else {
      return true;
    }
  }

  obtenerHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.leerToken()
      })
    };
  }




}
