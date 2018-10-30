import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  /*
  Usamos el contructor de FormControl para establecer un valor inicial, el cual en este caso es una cadena vacía. Al crear estos controles en la clase componente, obtenemos acceso inmediato para escuchar, actualizar y validar el estado de la entrada del formulario.
  */
  nombre = new FormControl('');


  constructor() { }

  ngOnInit() {
  }

  /*
  En este ejemplo estamos usando un solo control. En el caso de usar el método setValue() en un form group o en una instacia de array de form, necesitamos que los valores coincidan con la estructura del grupo o array.
  */
  updateNombre(){
    this.nombre.setValue("Jose");
  }

}
