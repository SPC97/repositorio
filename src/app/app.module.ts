import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/*A.11 Verificamos que HeroesComponen este importado */
import { HeroesComponent } from './heroes/heroes.component';
/*A.9 Agregamos la importacion FormsModule*/
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    /*A.12 Aqui vemos que esta declarado HeroesComponent*/
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, 
    /*A.10 Agregamos FormsModule que contiene una lista de módulos
     externos que requiere su aplicación.*/
    FormsModule, AppRoutingModule
  ],  
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
