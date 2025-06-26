import { Component } from '@angular/core';
import { AboutComponent } from '../sub/about/about';
import { EducationComponent } from '../sub/education/education';
import { ProComponent } from '../sub/exp/pro/pro';
import { PersoComponent } from '../sub/exp/perso/perso';
import { ProjectsComponent } from '../sub/projects/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutComponent, EducationComponent, ProComponent, PersoComponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
