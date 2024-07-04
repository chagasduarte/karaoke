import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IVideo } from '../../../shared/models/videos';

@Component({
  selector: 'app-card-fila',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-fila.component.html',
  styleUrl: './card-fila.component.css'
})
export class CardFilaComponent{
  
  @Input() videos: IVideo[] = [];

}
