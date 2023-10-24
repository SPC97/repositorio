/*C.4 Modificamos la declaración de importación @angular/core para incluir el símbolo Input*/
import { Component, OnInit } from '@angular/core';
/*C.2 Importamos el símbolo Hero */
import { Hero } from '../hero';
/*E.20 Agregamos las siguientes importaciones */
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /*C.5 Agregamos la propiedad hero antepuesta por el decorador @Input(). */
  hero!: Hero;
  /*E.21 Guardamos los valores en un constructor */
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  /*E.22 Agregamos para extraer el parametro de la ruta id*/
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  /*E.25 Agregamos el metodo goBack */
  goBack(): void {
    this.location.back();
  }
}


