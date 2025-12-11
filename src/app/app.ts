import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Correu} from './correu/correu';
import {LlistaCorreus} from './llista-correus/llista-correus';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Correu, LlistaCorreus],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LEA-AngularPract1');
}
