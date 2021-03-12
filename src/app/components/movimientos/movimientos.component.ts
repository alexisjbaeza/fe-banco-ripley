import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MovimientoModel } from 'src/app/models/movimiento';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  constructor(private movimientosService: MovimientosService) { }

  ngOnInit() {
    this.buscarMovimientos();
  }

  movimientos: MovimientoModel[] = [];

  buscarMovimientos() {
    this.movimientosService.getMovimientos().subscribe((resp: any) => {
      this.movimientos = resp.movimientos;
    })
  };

}
