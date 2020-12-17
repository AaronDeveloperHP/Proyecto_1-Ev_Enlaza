import { Component, OnInit } from '@angular/core';
import { Petition } from 'src/app/models/petition';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-user-petitions',
  templateUrl: './user-petitions.page.html',
  styleUrls: ['./user-petitions.page.scss'],
})
export class UserPetitionsPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getMyPetitions();
  }
  petitions: Petition[];
  getMyPetitions() {
    this.authService.myPetitionIndex("pepe@gmail.co").subscribe(petitions => {
      this.petitions = petitions;
    });
  }
  insertPetition() {
    this.router.navigateByUrl("/add-petition");
  }
}
