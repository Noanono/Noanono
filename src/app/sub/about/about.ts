import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  about: any;
  skills: string[] = [];
  interests: string[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe((data: any) => {
      this.about = data.about;
      this.skills = data.skills;
      this.interests = data.interests;
    });
  }
}
