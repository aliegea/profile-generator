import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  userData: any;

  constructor(
    private profileService: ProfileService,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(
      this.profileService.getSessionUserData('userData') || ''
    );
  }
  goBack(): void {
    this.router.navigate(['/userForm']);
  }
}
