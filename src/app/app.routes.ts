import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { ImprintComp } from './imprint-comp/imprint-comp';

export const routes: Routes = [
    { path : '' , component : MainContent },
      { path : 'imprint-comp' , component : ImprintComp },
];
