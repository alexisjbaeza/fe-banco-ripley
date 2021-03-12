import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'ngx-angular8-sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;
  rut_regex = '^\\d{7,8}\\-([\\dkK])$'

  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      rut: ['', [Validators.required, Validators.pattern(this.rut_regex)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.formRegistro.controls; }


  ngOnInit() {
  }

  registrar() {
    console.log("submit")
    if (this.formRegistro.valid) {
      const nombre = this.formRegistro.controls.nombre.value;
      const rut = this.formRegistro.controls.rut.value;
      const email = this.formRegistro.controls.email.value;
      const password = this.formRegistro.controls.password.value;

      this.authService.crearCuenta(nombre, rut, email, password).subscribe((resp: any) => {
        if (resp.ok) {
          Swal.fire({
            title: 'Cuenta creada',
            text: 'Por favor inica sesión',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            this.router.navigateByUrl('/home');
          })
        } else {
          Swal.fire({
            title: 'No se pudo crear la cuenta',
            text: resp.msg,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          })
        }
      })

    } else {
      this.formRegistro.markAllAsTouched();
    }
  }

}
