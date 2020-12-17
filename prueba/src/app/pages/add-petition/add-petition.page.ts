import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-petition',
  templateUrl: './add-petition.page.html',
  styleUrls: ['./add-petition.page.scss'],
})
export class AddPetitionPage  {

  petitionForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) {
    this.petitionForm = this.fb.group({
      title: [''],
      action: [''],
      description:[''],
      start_date:[''],
      end_date:['']
    });
  }

  ngOnInit() {
  }
 
  onFormSubmit() {
    if (!this.petitionForm.valid) {
      console.log("COSA");
      return false;
    } else {
      let petition = {
        id:null,
        title: this.petitionForm.value.title,
        action:this.petitionForm.value.action,
        description:this.petitionForm.value.description,
        state: "",
        origin: "",
        start_date:this.petitionForm.value.start_date,
        end_date:this.petitionForm.value.end_date

      }
      this.authService.addPetition(petition)
        .subscribe((res) => {
          console.log("por aquí pasó")
          this.router.navigateByUrl("/user-petitions");
          
        });
    }
  }
}
