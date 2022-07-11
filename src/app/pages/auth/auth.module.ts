import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRountingModule } from './auth-rounting.module';

import { SignInPage } from './sign-in/sign-in.page';

import { InputComponent } from 'src/app/components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    AuthRountingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRountingModule,
    IonicModule
  ],
  declarations: [
    SignInPage,
    InputComponent
  ]
})

export class AuthModule {}
