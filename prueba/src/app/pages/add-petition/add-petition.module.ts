import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPetitionPageRoutingModule } from './add-petition-routing.module';

import { AddPetitionPage } from './add-petition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPetitionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddPetitionPage]
})
export class AddPetitionPageModule {}
