import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [
    NgForOf
  ],
  templateUrl: './llista-correus.html',
  styleUrl: './llista-correus.css',
  standalone: true
})
export class LlistaCorreus {
  // Correos de ejemplo

  correus: string[] = [
    'correoejemplo1',
    'correoejemplo2'
  ];

}
