import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UsingPrimeComponent } from './using-prime/using-prime.component'
import {ButtonModule} from 'primeng-lts/button'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AboutComponent,
    PersonalDetailsComponent,
    UsingPrimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
   
  ],
  exports:
  [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UsingPrimeComponent
  ]
})
export class UsersModule { }
