import { Component } from '@angular/core';
import { AboutComponent } from '../sub/about/about';

@Component({
  selector: 'app-home',
  imports: [AboutComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
