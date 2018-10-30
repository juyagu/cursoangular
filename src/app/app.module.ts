import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Importamos el módulo


import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ResaltadoDirective } from './resaltado.directive';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    HeroesComponent,
    ResaltadoDirective,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- Agregamos el módulo acá
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
