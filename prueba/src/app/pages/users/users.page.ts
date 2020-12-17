import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.getAllUsers();
  }
  users:User[];
  getAllUsers(){
    this.authService.index().subscribe(users=>{
      this.users=users;
    });
  }
  insertUser(){
    this.router.navigateByUrl("/register");
  }
}
