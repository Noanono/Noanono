import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-perso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perso.html',
  styleUrls: ['./perso.scss']
})
export class PersoComponent implements OnInit {
  personal: any[] = [];
  error = false;

  constructor(private profileService: ProfileService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.personal = data.personal;
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
