import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tablero',
    loadChildren: () => import('./pages/tablero/tablero.module').then( m => m.TableroPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./pages/calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('./pages/cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  },
  {
    path: 'perfil-empresas',
    loadChildren: () => import('./pages/perfil-empresas/perfil-empresas.module').then( m => m.PerfilEmpresasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
