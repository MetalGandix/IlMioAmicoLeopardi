import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../class/user';
import { AuthenticationService } from '../service/authentication.service';
import { GestioneUtenteService } from '../service/gestione-utente.service';
import { RegistrazioneService } from '../service/registrazione.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginservice: AuthenticationService,
    private gestioneUtenteService: GestioneUtenteService,
    private registrazione: RegistrazioneService) { }

  logEffettuato: boolean = true
  user: User
  username = ''
  password = ''
  invalidLogin = false
  message1: boolean = false
  refresha: number = 1
  booleanErrorToken: boolean = false
  booleanGet: boolean = false

  ngOnInit(): void {
  }


  checkLogin() {
    this.gestioneUtenteService.findUtenteSingoloLogin(this.username).subscribe(u => {
      if (u != null) {
        this.user = u
        if (this.user.enabled == false) {
          this.booleanErrorToken = true
        } else {
          this.loginservice.authenticate(this.user.username, this.password).subscribe(
            data => {
              if (this.user.enabled == true) {
                this.router.navigate(['/scelta-utente'], {
                  state: {
                    refresha: this.refresha
                  }
                })
              }
            })
        }
      }
      else{
        this.message1 = true
      }
    })
  }
}
