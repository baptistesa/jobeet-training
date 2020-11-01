import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CustomMaterialModule } from '../core/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomMaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
