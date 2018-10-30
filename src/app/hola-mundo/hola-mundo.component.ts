import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: 'hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent {
  nombre = 'Pablo Rodriguez';
  edad = 40;
  sueldos = [40000, 50000, 60000];
}




