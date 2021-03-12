import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import Swal from 'ngx-angular8-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  formTransferencia: FormGroup;
  monto_regex = "^\\d* ?$"
  rut_regex = '^\\d{7,8}\\-([\\dkK])$'

  constructor(private transferenciaService: TransferenciaService,
    private fb: FormBuilder,
    private router: Router) {
    this.formTransferencia = this.fb.group({
      rut: ['', [Validators.required, Validators.pattern(this.rut_regex)]],
      monto: ['', [Validators.required, Validators.pattern(this.monto_regex)]]
    });
  }

  get f() { return this.formTransferencia.controls; }

  ngOnInit() {
  }

  realizarTransferencia() {
    if (this.formTransferencia.valid) {
      const cuenta_destino = this.formTransferencia.controls.rut.value;
      const monto = Number(this.formTransferencia.controls.monto.value);
      this.transferenciaService.realizarTransferencia(cuenta_destino, monto).subscribe((resp: any) => {
        console.log(resp)
        if (resp.ok) {
          Swal.fire({
            title: 'Transferencia realizada con éxito',
            text: '',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            this.router.navigateByUrl('/home');
          })
        } else {
          Swal.fire({
            title: 'No se pudo realizar la transferencia',
            text: resp.msg,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          })
        }
      })
    } else {
      this.formTransferencia.markAllAsTouched();
    }

  }
}
