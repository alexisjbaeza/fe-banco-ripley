import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CargaService } from 'src/app/services/carga.service';
import Swal from 'ngx-angular8-sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {

  formCarga: FormGroup;
  monto_regex = "^\\d* ?$"

  constructor(private cargaService: CargaService,
    private fb: FormBuilder,
    private router: Router) {

    this.formCarga = this.fb.group({
      monto: ['', [Validators.required, Validators.pattern(this.monto_regex)]]
    });
  }

  ngOnInit() {

  }

  get f() { return this.formCarga.controls; }

  realizarCarga() {
    if (this.formCarga.valid) {
      const monto = Number(this.formCarga.controls.monto.value);
      this.cargaService.postCarga(monto).subscribe((resp: any) => {
        if (resp.ok) {
          Swal.fire({
            title: 'Carga de fondo realizada con éxito',
            text: '',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            this.router.navigateByUrl('/home');
          })
        } else {
          Swal.fire({
            title: 'No se pudo realizar la carga de fondos',
            text: 'Por favor intenta nuevamente',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          })
        }
      })
    } else {
      this.formCarga.markAllAsTouched();
    }

  }
}
