import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComp } from './landing-page/landing-page-comp'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComp, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
