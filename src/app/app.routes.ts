import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error404 } from './error404/error404';

export const routes: Routes = [
    { path: 'home', component: Home , pathMatch: 'full' },
    { path: '**', component: Error404, pathMatch: 'full' },
];
