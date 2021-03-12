import { Component, OnInit } from '@angular/core';
import { CuentaModel } from 'src/app/models/cuenta';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {

  constructor(private authService: AuthService) { }
  cuenta: CuentaModel;

  ngOnInit() {
    this.authService.getCuenta().subscribe((resp: any) => {
      if (resp.ok) {
        this.cuenta = resp.cuenta;
      }
    });
  }

}
