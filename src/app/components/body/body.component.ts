import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar = true;

  frase:any = {
    mensaje: 'Te voy a matá',
    autor: 'Loco Gatti'
  };

  personajes: string[] = ['Loco Gatti', 'Roncero', 'Soria'];

}
