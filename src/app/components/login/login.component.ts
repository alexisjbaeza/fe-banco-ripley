import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'ngx-angular8-sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formLogin: FormGroup;
  rut_regex = '^\\d{7,8}\\-([\\dkK])$'


  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    this.formLogin = this.fb.group({
      rut: ['', [Validators.required, Validators.pattern(this.rut_regex)]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.formLogin.controls; }

  ngOnInit() {

  }

  login() {
    if (this.formLogin.valid) {
      const rut = this.formLogin.controls.rut.value;
      const password = this.formLogin.controls.password.value;
      this.authService.login(rut, password).subscribe((resp: any) => {
        if (resp.ok) {
          this.router.navigateByUrl('/home');
        } else {
          Swal.fire(
            'Acceso denegado',
            'Credenciales inválidas',
            'warning'
          )
        }
      })
    } else {
      this.formLogin.markAllAsTouched()
    }
  }
}
