import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetiroService } from 'src/app/services/retiro.service';
import Swal from 'ngx-angular8-sweetalert2'

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss']
})
export class RetiroComponent implements OnInit {

  formRetiro: FormGroup;
  monto_regex = "^\\d* ?$"

  constructor(private retiroService: RetiroService,
    private fb: FormBuilder,
    private router: Router) {
    this.formRetiro = this.fb.group({
      monto: ['', [Validators.required, Validators.pattern(this.monto_regex)]]
    });
  }

  get f() { return this.formRetiro.controls; }

  ngOnInit() {

  }


  realizarRetiro() {
    if (this.formRetiro.valid) {
      const monto = Number(this.formRetiro.controls.monto.value);
      this.retiroService.realizarRetiro(monto).subscribe((resp: any) => {
        if (resp.ok) {
          Swal.fire({
            title: 'Retiro de fondos realizada con éxito',
            text: '',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            this.router.navigateByUrl('/home');
          })
        } else {
          Swal.fire({
            title: 'No se pudo realizar el retiro de fondos',
            text: resp.msg,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          })
        }
      })
    } else {
      this.formRetiro.markAllAsTouched();
    }

  }

}
