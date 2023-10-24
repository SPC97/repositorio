/*A.5 Habiamos Inicialízalo antes con un id de 1 y un nombre de Windstorm.*/
import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
/*B.2 habiamos creado para mostrar heroes
import { HEROES } from '../mock-heroes';*/
//D.4 Eliminamos la importación HEROES, porque ya no la necesitaremos luego Importa el HeroService en su lugar.
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
/*B.6 Esto se genera cuando la CLI crea un HeroesComponent*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*B.3 definimos una componente llamada heroes para el array HEROES y la vinculación
  heroes = HEROES; */

  /*hero = 'Windstorm'; //A.1 Agremamos la Propiedad Hero*/
  selectedHero!: Hero;
  //D.5 Reemplazamos la definición de la propiedad heroes con una simple declaración.
  heroes!: Hero[];
  //D.6 agregamos un parametro privado
  constructor(private heroService: HeroService, private messageService: MessageService) 
  {}
  //D.8 la mejor manera para llamar a getHeroes
  ngOnInit() {
  this.getHeroes();
  }
  /*B.8 Agregamos el método onSelect() de la siguiente manera*/
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  //this.messageService.add(`Héroe seleccionado:${hero.name} | id:${hero.id}`);  
  }
  //D.7 Creamos un método para recuperar a los héroes del servicio
  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

  //D.11 Reemplazamos el metodo 7 para devolver un observable
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

  