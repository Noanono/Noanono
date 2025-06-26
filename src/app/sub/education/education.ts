import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent implements OnInit {
  education: any[] = [];
  error = false;

  constructor(private profileService: ProfileService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.education = data.education;
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
