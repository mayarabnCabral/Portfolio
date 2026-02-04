import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponente } from "./cabecalho-componente/cabecalho-componente";
import { ContatoComponente } from "./contato-componente/contato-componente";
import { IncioComponente } from "./incio-componente/incio-componente";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponente, ContatoComponente, IncioComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
