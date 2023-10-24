/*E.1 Se genera automaticamente cuando se ejecuta en el CLI
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }*/

/*E.2 Y Reemplazamos por lo siguiente */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
/*E.12 Agregamos la ruta del dashboard*/
import { DashboardComponent } from './dashboard/dashboard.component';
/*E.17 Agregamos una ruta detalle del héroe*/
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
/*E.3 Podemos usar en el arreglo de ruta path y component */
const routes: Routes = [
  /*E.14 Para que la aplicación navegue al dashboard automáticamente */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /*E.13 Agregamos la ruta para el DashboardComponent */
  { path: 'dashboard', component: DashboardComponent },  
  /*E.18  agregamos una ruta parametrizada que coincida con el patrón de ruta de la vista detalle del héroe.*/
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  /*E.4 Importa y configura las rutas en un solo paso: RouterModule.forRoot()*/
  imports: [RouterModule.forRoot(routes)],
  /*E.5 Exporta el RouterModule para que este disponible ne toda la aplicacion */
  exports: [RouterModule]
})
export class AppRoutingModule { }
