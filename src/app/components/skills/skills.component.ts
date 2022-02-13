import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  constructor(private profileService: ProfileService) {}
  skillsForm = new FormGroup({
    skills: new FormArray([new FormControl('')]),
  });

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  onFormSubmit(): void {
    for (let i = 0; i < this.skills.length; i++) {
      console.log(this.skills.at(i).value);
      console.log(this.skills.value);
    }
    this.profileService.saveSessionStorage(this.skills.value);
  }

  addNameField() {
    this.skills.push(new FormControl(''));
  }

  deleteNameField(index: number) {
    if (this.skills.length !== 1) {
      this.skills.removeAt(index);
    }
    console.log(this.skills.length);
  }
}
