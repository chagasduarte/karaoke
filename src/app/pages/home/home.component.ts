import { Component, OnInit } from '@angular/core';
import { CardFilaComponent } from "./card-fila/card-fila.component";
import { CardPessoasComponent } from './card-pessoas/card-pessoas.component';
import { CardPlayingComponent } from './card-playing/card-playing.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
      CardFilaComponent,
      CardPessoasComponent,
      CardPlayingComponent,
      CommonModule
    ]
})
export class HomeComponent{

}
