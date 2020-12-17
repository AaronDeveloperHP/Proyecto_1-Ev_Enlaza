import { Component, OnInit } from '@angular/core';
import { Petition } from 'src/app/models/petition';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-petitions',
  templateUrl: './petitions.page.html',
  styleUrls: ['./petitions.page.scss'],
})
export class PetitionsPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.getAllPetitions();
  }
  ionViewWillEnter() {
    this.getAllPetitions();
  }
  petitions: Petition[];
  getAllPetitions() {
    this.authService.petitionIndex().subscribe(petitions => {
      this.petitions = petitions;
    });
  }


  deletePetition(id: number) {
    this.authService.deletePetition(id).subscribe(() => {
      this.getAllPetitions();
    })
  }
  updatePetition(id: number,title:string,action:string,description:string,state:string,origin:string,start_date:string,end_date:string) {
   return this.authService.updatePetition(id,title,action,description,state,origin,start_date,end_date);

  }
  insertPetition() {
    this.router.navigateByUrl("/add-petition");
  }
}
