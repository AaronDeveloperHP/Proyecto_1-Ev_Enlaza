import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { EnvService } from './env.service';
import { User } from '../models/user';
import {Petition} from '../models/petition';
import {Type} from '../models/type';
import {Action} from '../models/action';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
userr:User;
  isLoggedIn = false;
  token:any;
  currentPetitionId:number;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService
  ) {
   this.token=this.getTokken();
   }
   getTokken(){
    return this.storage.get('token');
   }
   index(){
    console.log(this.token);
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]);
    return this.http.get<User[]>(this.env.API_URL+'auth/userIndex',{headers:headers});
   }     
   petition:Observable<Petition>;
   updatePetition(id:number,title:string,action:string,description:string,state:string,origin:string,start_date:string,end_date:string){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    this.petition= this.http.post<Petition>(this.env.API_URL+'auth/getPetition/'+id,{title:title,action:action,description:description,state:"aceptada",origin:origin,start_date:start_date,end_date:end_date},{headers:headers});
   }
   
   deletePetition(id:number){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.delete<Petition>(this.env.API_URL+'auth/deletePetition/'+id,{headers:headers});
   }     

   petitionIndex(){
    console.log(this.token);
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]);
    return this.http.get<Petition[]>(this.env.API_URL+'auth/indexPetition',{headers:headers});
   }       
   myPetitionIndex(email:String){
    console.log(this.token);
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]);
    return this.http.get<Petition[]>(this.env.API_URL+'auth/getUserPetitions/'+email,{headers:headers});
   }                      
  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  register(name:String ,fName: String, lName: String, type: String, telephone:String,email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/register',
      {name:name, fName: fName, lName: lName, type:type, telephone:telephone, email: email, password: password}
    )
  }
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.storage.remove("type");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }
  userEmail:string;
  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
    .pipe(
      tap(user => {
        this.storage.set("type",user.type);
        this.userEmail=user.email;
        return user;
      })
    )
  }
  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
  setCurrentPetitionId(id:number){
this.currentPetitionId=id;
  }
  getCurrentPetitionId():number{
    return this.currentPetitionId;
  }
  addPetition(petition:Petition):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': this.token["token_type"]+" "+this.token["access_token"]
      })
    };
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("title", petition.title);
    bodyEncoded.append("action", petition.action);
    bodyEncoded.append("description", petition.description);
    bodyEncoded.append("state","pendiente");
    bodyEncoded.append("origin",this.userEmail) ;
    bodyEncoded.append("start_date", petition.start_date);
    bodyEncoded.append("end_date", petition.end_date);
    let body = bodyEncoded.toString();


    return this.http.post(this.env.API_URL+'auth/createPetition', body, httpOptions);
   
  }
  typeIndex(){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]);
    return this.http.get<Type[]>(this.env.API_URL+'auth/indexType',{headers:headers});
  }
  actionIndex(){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]);
    return this.http.get<Action[]>(this.env.API_URL+'auth/indexAction',{headers:headers});
  }
}
