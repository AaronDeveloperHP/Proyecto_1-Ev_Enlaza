import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPetitionsPage } from './user-petitions.page';

const routes: Routes = [
  {
    path: '',
    component: UserPetitionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPetitionsPageRoutingModule {}
