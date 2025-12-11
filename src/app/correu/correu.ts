import { Component } from '@angular/core';

@Component({
  selector: 'app-correu',
  imports: [],
  templateUrl: './correu.html',
  styleUrl: './correu.css',
  standalone: true
})
export class Correu {

  protected readonly contarLetras = contarLetras;
}

function contarLetras(texto: string): number {
  return texto.length;
}

