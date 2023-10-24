/*D.13 Reemplazamos el contenido; uno para agregar() un mensaje al caché y otro para borrar() el caché. */
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}