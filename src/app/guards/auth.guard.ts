import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import Swal from 'ngx-angular8-sweetalert2'
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(): boolean {

    if (this.auth.estaAutenticado()) {
      return true;
    } else {
      Swal.fire(
        'Acceso denegado',
        'Para acceder inicia sesión',
        'warning'
      )
      this.router.navigateByUrl('/home');
      return false;
    }

  }

}
