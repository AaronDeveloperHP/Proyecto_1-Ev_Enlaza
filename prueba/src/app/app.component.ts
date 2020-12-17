import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  type:String;
  
  public selectedIndex = 0;
  getType() {
    this.storage.get('type').then((val)=>{
      this.type=val;
     });
  }
 
  
  public appPages = [
    {
      title: 'Perfil',
      url: 'profile',
      icon: 'person-circle'
    },
    {
      title: 'Solicitudes',
      url: 'user-petitions',
      icon: 'mail'
    },
    {
      title: 'Generar solicitud',
      url: 'add-petition',
      icon: 'create'
    },
    {
      title: 'Opciones',
      url: '',
      icon: 'settings'
    }
  ];
  public appAdminPages=[
    {
      title: 'Perfil',
      url: 'profile',
      icon: 'person-circle'
    },
    {
      title: 'Solicitudes',
      url: 'petitions',
      icon: 'mail'
    },
    {
      title:'Usuarios',
      url:'users',
      icon:'person'
    },
    {
      title: 'Registrar',
      url: 'register',
      icon: 'person-add'
    },
    {
      title: 'Opciones',
      url: '',
      icon: 'settings'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.getToken();
    });
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.getType();
  }

 
  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data['message']);        
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/login');
      }
    );
  }
}
