import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPetitionsPageRoutingModule } from './user-petitions-routing.module';

import { UserPetitionsPage } from './user-petitions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPetitionsPageRoutingModule
  ],
  declarations: [UserPetitionsPage]
})
export class UserPetitionsPageModule {}
