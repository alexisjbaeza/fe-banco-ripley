import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaModel } from 'src/app/models/cuenta';
import { AuthService } from 'src/app/services/auth.service';
import { SaldoService } from 'src/app/services/saldo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sesion_iniciada = false;
  cuenta: CuentaModel;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.sesion_iniciada = this.authService.estaAutenticado()
    if (this.sesion_iniciada) {
      this.authService.getCuenta().subscribe((resp: any) => {
        if (resp.ok) {
          this.cuenta = resp.cuenta;
          console.log(this.cuenta);
        }
      });
    }
  }

  cerrarSesion() {
    this.authService.logout();
    this.sesion_iniciada = false;
    this.router.navigateByUrl('/home');

  }

}
