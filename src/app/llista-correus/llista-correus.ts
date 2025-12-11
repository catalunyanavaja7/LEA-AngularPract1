import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [],
  templateUrl: './llista-correus.html',
  styleUrl: './llista-correus.css',
  standalone: true
})
export class LlistaCorreus implements OnInit {

  correus = [
    {numero: "Correo 1",emissor: "alexis@gmail.com", texto:"Hola buenas le informo que te calles", leido: false,},
    {numero: "Correo 2",emissor: "gorka@gmail.com", texto:"Se a caducao tu suscripcion paga perro", leido: true,}
  ];

  ngOnInit(): void {

  }

}
