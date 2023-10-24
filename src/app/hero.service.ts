import { Injectable } from '@angular/core';
//D.1 importamos hero y heroes
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//D.9 Importamos los símbolos Observable y of de RxJS.
import { Observable, of } from 'rxjs';
//D.14 Importamos el MessageService.
import { MessageService } from './message.service';

//D.3 Es agregado por defecto que registra a un proveedor con el inyector raíz
@Injectable({providedIn: 'root'})
export class HeroService {
  //D.15 Modificamos el constructor con un parámetro que declare una propiedad privada messageService
  constructor(private messageService: MessageService) { }
  //D.2 Agregamos el método getHeroes y devuelva los héroes simulados.
  /*
  getHeroes(): Hero[] {
    return HEROES;
  }*/

  getHeroes(): Observable<Hero[]> {
    
    return of(HEROES);
  }
  //D.10 Reemplazamos el método getHeroes()
  //E.23 agrega el siguiente método getHero() con el id después del método getHeroes()
  getHero(id: number): Observable<Hero> {
  // D.16 Modificamos para enviar el mensaje después de obtener a los héroes.
  const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Héroe seleccionado:${hero.name}  | id:${id}`);
    return of(hero);
  }
}

