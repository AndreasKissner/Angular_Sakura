import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { ImprintComp } from './imprint-comp/imprint-comp';
import { LandingPageComp } from './main-content/landing-page/landing-page-comp';

export const routes: Routes = [
    { path : '' , component : MainContent },
      { path : 'imprint-comp' , component : ImprintComp },
       { path : 'landing-page' , component : LandingPageComp },
        { path : 'main-content', component: MainContent }
];
