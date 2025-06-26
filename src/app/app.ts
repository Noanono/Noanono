import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'SOLER Noah';

  @ViewChild('navIndicator', { static: false }) navIndicator!: ElementRef;
  @ViewChild('navList', { static: false }) navList!: ElementRef;

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.updateNavIndicator(sectionId);
  }

  ngAfterViewInit() {
    // Initial position
    this.updateNavIndicator('about-section');
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    // Détecte la section visible et met à jour l'indicateur
    const sections = [
      'about-section',
      'education-section',
      'pro-section',
      'perso-section',
      'projects-section'
    ];
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 120) {
        current = id;
      }
    }
    this.updateNavIndicator(current);
  }

  updateNavIndicator(sectionId: string) {
    if (!this.navList || !this.navIndicator) return;
    const nav = this.navList.nativeElement as HTMLElement;
    const indicator = this.navIndicator.nativeElement as HTMLElement;
    const link = nav.querySelector(`a[href="#${sectionId}"]`) as HTMLElement;
    if (link) {
      indicator.style.width = link.offsetWidth + 'px';
      indicator.style.left = link.offsetLeft + 'px';
    }
  }
}
