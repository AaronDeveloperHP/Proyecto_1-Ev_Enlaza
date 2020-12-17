import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPetitionPage } from './add-petition.page';

const routes: Routes = [
  {
    path: '',
    component: AddPetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPetitionPageRoutingModule {}
