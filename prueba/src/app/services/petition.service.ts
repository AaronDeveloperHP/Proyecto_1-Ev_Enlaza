import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { tap } from 'rxjs/operators';
import {EnvService} from 'src/app/services/env.service';
import {Petition} from 'src/app/models/petition';
import {User} from "src/app/models/user";
import {AuthService} from "src/app/services/auth.service"
@Injectable({
  providedIn: 'root'
})
export class PetitionService {
  token:any;
  constructor( 
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
    private authService:AuthService
    ) {
    this.token=this.storage.get("token");
     }
    index(){
      console.log(this.authService.getTokken());
      const headers = new HttpHeaders({
        
        'Authorization': this.authService["token_type"]+" "+this.authService.getTokken["access_token"]
      });
      console.log(headers);
      console.log(this.token["token_type"]);
      return this.http.get<Petition[]>(this.env.API_URL+'auth/indexPetition',{headers:headers});
     }
}
