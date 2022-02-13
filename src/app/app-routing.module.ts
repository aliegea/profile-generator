import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/userForm', pathMatch: 'full' },
  { path: 'userForm', component: UserFormComponent },
  { path: 'profile', component: ProfileCardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
