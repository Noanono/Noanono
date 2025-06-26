import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  about: any;
  skills: { name: string; link?: string }[] = [];
  interests: string[] = [];
  error = false;
  encodeURIComponent = encodeURIComponent;

  skillLinks: { [key: string]: string } = {
    'Angular': 'https://angular.dev/',
    'TypeScript': 'https://www.typescriptlang.org/',
    'JavaScript': 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    'HTML5': 'https://developer.mozilla.org/fr/docs/Web/HTML',
    'CSS': 'https://developer.mozilla.org/fr/docs/Web/CSS',
    'Sass': 'https://sass-lang.com/',
    'Python': 'https://www.python.org/',
    'Git': 'https://git-scm.com/',
    'Docker': 'https://www.docker.com/',
    'Node.js': 'https://nodejs.org/',
    'SQL': 'https://fr.wikipedia.org/wiki/Structured_Query_Language',
    'C++': 'https://fr.wikipedia.org/wiki/C%2B%2B',
    'Java': 'https://www.java.com/',
    'Figma': 'https://www.figma.com/',
    'Photoshop': 'https://www.adobe.com/fr/products/photoshop.html',
    // Ajoute d'autres compétences et liens ici si besoin
  };

  constructor(private profileService: ProfileService, private cdr: ChangeDetectorRef) {
    console.log('[AboutComponent] Constructeur appelé');
  }

  ngOnInit() {
    console.log('[AboutComponent] ngOnInit appelé');
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        console.log('[AboutComponent] Données reçues du service', data);
        this.about = data.about;
        this.skills = data.skills;
        this.interests = data.interests;
        this.error = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('[AboutComponent] Erreur lors du chargement du profil', err);
        this.error = true;
        this.cdr.markForCheck();
      }
    });
  }
}
