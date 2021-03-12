import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { HttpClientModule } from '@angular/common/http';
import { MovimientosService } from './services/movimientos.service';
import { CargaComponent } from './components/carga/carga.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SaldoComponent } from './components/saldo/saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovimientosComponent,
    CargaComponent,
    RetiroComponent,
    TransferenciaComponent,
    LoginComponent,
    RegistroComponent,
    SaldoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MovimientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
