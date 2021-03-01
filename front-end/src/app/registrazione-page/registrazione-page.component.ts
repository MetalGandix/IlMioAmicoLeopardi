import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { AuthenticationService } from '../service/authentication.service';
import { RegistrazioneService } from '../service/registrazione.service';

@Component({
  selector: 'app-registrazione-page',
  templateUrl: './registrazione-page.component.html',
  styleUrls: ['./registrazione-page.component.css']
})
export class RegistrazionePageComponent{

  user: User;
  showMsg: boolean = false;
  userExist: boolean = false;
  b1: boolean = false
  b2: boolean = false
  clicked: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticate: AuthenticationService,
    private registrazione: RegistrazioneService) {
    this.user = new User();
  }

  onSubmit() {
    this.registrazione.save(this.user).subscribe(data =>{})
    this.showMsg= true;
    this.clicked = true
  }

  mettiRuolo(){
    this.authenticate.getRole().authority=='ROLE_VISITATORE'
  }

  existUser(){
    if(this.user.username!=''){
      this.registrazione.existUser(this.user.username).subscribe(res=>{
        if(res){
          this.userExist=true;
          if(this.userExist == true){
            this.b1 = false
            this.b2 = true
          }
        }else{
          this.b2 = false
          this.userExist=false;
          this.b1 = true
        }
      })
     
    }
  }


}
