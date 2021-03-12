
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { CargaComponent } from './components/carga/carga.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'carga', component: CargaComponent, canActivate: [AuthGuard] },
  { path: 'retiro', component: RetiroComponent, canActivate: [AuthGuard] },
  { path: 'transferencia', component: TransferenciaComponent, canActivate: [AuthGuard] },
  { path: 'movimientos', component: MovimientosComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true, relativeLinkResolution: 'legacy' });
