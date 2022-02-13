import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { SkillsComponent } from './components/skills/skills.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [AppComponent, SkillsComponent, AvatarComponent, UserFormComponent, ProfileCardComponent, SkillComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
