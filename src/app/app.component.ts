import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillsComponent } from './components/skills/skills.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

import { ProfileService } from './services/profile.service';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private countryService: CountriesService
  ) {}
  avatar!: string;
  haveNewUser: boolean = false;
  title = 'My-profile-generator';
  userForm!: FormGroup;
  skills: any = [];
  sesionUserName = 'userData';
  countries: any[] = [];
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
      description: [''],
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
  }
  getCountries() {
    this.countryService.allCountries().subscribe(
      (data) => {
        this.countries = data.Countries;
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
}
