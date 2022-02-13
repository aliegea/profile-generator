import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SkillsComponent } from '../skills/skills.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

import { ProfileService } from 'src/app/services/profile.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private countryService: CountriesService,
    private router: Router
  ) {}
  avatar!: string;
  haveNewUser: boolean = false;
  title = 'My-profile-generator';
  userForm!: FormGroup;
  skills: any = [];
  sesionUserName = 'userData';
  countries: any[] = [];
  countryNames: any[] = [];
  errorMessageMaps: string = '';
  ngOnInit() {
    this.profileService.getSessionUserData(this.skills);
    this.getCountries();
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      avatar: [''],
      description: ['', Validators.maxLength(200)],
      field: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  get firstname() {
    return this.userForm.get('firstname');
  }
  get lastname() {
    return this.userForm.get('lastname');
  }

  get country() {
    return this.userForm.get('country');
  }

  get city() {
    return this.userForm.get('city');
  }
  get myavatar() {
    return this.userForm.get('avatar');
  }

  get field() {
    return this.userForm.get('field');
  }
  get experience() {
    return this.userForm.get('experience');
  }
  get description() {
    return this.userForm.get('description');
  }

  onSubmit() {
    console.log(this.userForm.value);
    // creates a new object with form data
    let newUser = this.userForm.value;
    // get skills array sent  previously to local storage by skillscomponent
    this.skills = JSON.parse(
      this.profileService.getSessionUserData('userData') || ''
    );
    // add skills array to new user skills property
    newUser.skills = [...this.skills];

    this.profileService.saveSessionStorage(newUser);
    this.goToProfile();
  }
  getCountries() {
    this.countryService.allCountries().subscribe(
      (data) => {
        this.countries = data.Countries;
        for (let i = 0; i < this.countries.length; i++) {
          let country = this.countries[i].CountryName;
          this.countryNames.push(country);
        }
        console.log(this.countryNames);
      },
      (err) => {
        console.log(err);
        if (err.error instanceof Error) {
          this.errorMessageMaps = err.error.message;
        } else {
          this.errorMessageMaps = err.error.message;
        }
      }
    );
  }
  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
}
