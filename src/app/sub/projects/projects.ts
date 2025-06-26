import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  error = false;
  today = new Date();

  constructor(private profileService: ProfileService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.projects = data.projects;
        this.error = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.error = true;
        this.cdr.markForCheck();
      }
    });
  }
}
