import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-correu',
  imports: [],
  templateUrl: './correu.html',
  styleUrl: './correu.css',
  standalone: true
})
export class Correu implements OnInit{

  constructor() {

  }

  ngOnInit(): void {

  }

  contarLetras() {
    let letrasTitulo = document.getElementById("titulo")!.innerHTML;
    return letrasTitulo.length;
  }

}





