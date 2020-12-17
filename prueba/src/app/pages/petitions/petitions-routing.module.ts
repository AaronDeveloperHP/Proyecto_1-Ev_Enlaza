import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetitionsPage } from './petitions.page';

const routes: Routes = [
  {
    path: '',
    component: PetitionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetitionsPageRoutingModule {}
