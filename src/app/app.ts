import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { ImprintComp } from './imprint-comp/imprint-comp';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainContent, ImprintComp, Footer ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('sakura');
}
