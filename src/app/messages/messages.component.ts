import { Component } from '@angular/core';
//D.17 Importamos el MessageService
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  //D.18 Modificamos con un parámetro que declare una propiedad messageService publica
  constructor(public messageService: MessageService) {}
  ngOnInit() {
  }
}
