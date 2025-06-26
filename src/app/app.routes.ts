import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error404 } from './error404/error404';
import { ProComponent } from './sub/exp/pro/pro';
import { PersoComponent } from './sub/exp/perso/perso';
import { ProjectsComponent } from './sub/projects/projects';
import { EducationComponent } from './sub/education/education';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, pathMatch: 'full' },
    { path: 'pro', component: ProComponent, pathMatch: 'full' },
    { path: 'perso', component: PersoComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'education', component: EducationComponent, pathMatch: 'full' },
    { path: '**', component: Error404, pathMatch: 'full' },
];
