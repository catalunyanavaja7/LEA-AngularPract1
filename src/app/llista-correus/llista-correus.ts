import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-llista-correus',
  imports: [
    NgClass
  ],
  templateUrl: './llista-correus.html',
  styleUrl: './llista-correus.css',
  standalone: true
})
export class LlistaCorreus implements OnInit {
  count = 0
  count2 = 0
  correus = [
    {numero: "Correo 1",emissor: "alexis@gmail.com", texto:"Hola buenas le informo que te calles", leido: false,contador: this.count},
    {numero: "Correo 2",emissor: "aleix@gmail.com", texto:"Hola buenas le que te calles", leido: false,contador: this.count},
    {numero: "Correo 3",emissor: "asuraxd@gmail.com", texto:"Hola le informo que te calles", leido: true,contador: this.count2},
    {numero: "Correo 4",emissor: "gorka@gmail.com", texto:"Se a caducao tu suscripcion paga perro", leido: true,contador: this.count2},
    {numero: "Correo 5",emissor: "timusin@gmail.com", texto:"Se a tu suscripcion paga perro", leido: true,contador: this.count2}
  ];

  ngOnInit(): void {

  }

}
