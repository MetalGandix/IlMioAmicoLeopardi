import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MappaComponent } from './mappa/mappa.component';
import { PoesiaComponent } from './poesia/poesia.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrazionePageComponent } from './registrazione-page/registrazione-page.component';
import { CasaLeopardiComponent } from './componenti-percorso/casa-leopardi/casa-leopardi.component';
import { ChiesaDeiCappucciniComponent } from './componenti-percorso/chiesa-dei-cappuccini/chiesa-dei-cappuccini.component';
import { PiazzuolaSabatoDelVillaggioComponent } from './componenti-percorso/piazzuola-sabato-del-villaggio/piazzuola-sabato-del-villaggio.component';
import { CentroNazionaleStudiLeopardianiComponent } from './componenti-percorso/centro-nazionale-studi-leopardiani/centro-nazionale-studi-leopardiani.component';
import { IlColleDellInfinitoComponent } from './componenti-percorso/il-colle-dell-infinito/il-colle-dell-infinito.component';
import { CasaAdelaideAnticiComponent } from './componenti-percorso/casa-adelaide-antici/casa-adelaide-antici.component';
import { TorrePasseroSolitarioComponent } from './componenti-percorso/torre-passero-solitario/torre-passero-solitario.component';
import { MonteTaborComponent } from './componenti-percorso/monte-tabor/monte-tabor.component';
import { ViaRomaComponent } from './componenti-percorso/via-roma/via-roma.component';
import { VistaMontiAzzurriComponent } from './componenti-percorso/vista-monti-azzurri/vista-monti-azzurri.component';
import { LetteraDellaBefanaComponent } from './componenti-percorso/lettera-della-befana/lettera-della-befana.component';
import { PalazzoVenieriComponent } from './componenti-percorso/palazzo-venieri/palazzo-venieri.component';
import { PiazzaTorreDelBorgoComponent } from './componenti-percorso/piazza-torre-del-borgo/piazza-torre-del-borgo.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { PrenotazioneVisitaComponent } from './prenotazione-visita/prenotazione-visita.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { SceltaUtenteComponent } from './scelta-utente/scelta-utente.component';
import { TariffaComponent } from './tariffa/tariffa.component';
import { AutografoInnoComponent } from './componenti-percorso/autografo-inno/autografo-inno.component';
import { RoleGuardComponent } from './service/jwt-auth/role-guard/role-guard.component';
import { AuthGuardComponent } from './service/jwt-auth/auth-guard/auth-guard.component';
import { AuthenticationService } from './service/authentication.service';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { ContattiComponent } from './contatti/contatti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PlyrModule } from 'ngx-plyr';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { UtentiRegistratiComponent } from './utenti-registrati/utenti-registrati.component';
import { InfoVisitatoreComponent } from './info-visitatore/info-visitatore.component';
import { EventoComponent } from './evento/evento.component';
import { BachecaEventiComponent } from './bacheca-eventi/bacheca-eventi.component';
import { SocioComponent } from './socio/socio.component';
import { PoesiaSpecificaComponent } from './poesia-specifica/poesia-specifica.component';
import { MostraPoesiaComponent } from './mostra-poesia/mostra-poesia.component';
import { VediModuliSocioComponent } from './vedi-moduli-socio/vedi-moduli-socio.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MappaComponent,
    PoesiaComponent,
    ChiSiamoComponent,
    LoginPageComponent,
    RegistrazionePageComponent,
    CasaLeopardiComponent,
    ChiesaDeiCappucciniComponent,
    PiazzuolaSabatoDelVillaggioComponent,
    CentroNazionaleStudiLeopardianiComponent,
    IlColleDellInfinitoComponent,
    CasaAdelaideAnticiComponent,
    TorrePasseroSolitarioComponent,
    LetteraDellaBefanaComponent,
    MonteTaborComponent,
    VistaMontiAzzurriComponent,
    ViaRomaComponent,
    PalazzoVenieriComponent,
    PiazzaTorreDelBorgoComponent,
    PrenotazioneVisitaComponent,
    AreaRiservataComponent,
    SceltaUtenteComponent,
    TariffaComponent,
    AutografoInnoComponent,
    AuthGuardComponent,
    ContattiComponent,
    SidenavComponent,
    FooterComponent,
    UtentiRegistratiComponent,
    InfoVisitatoreComponent,
    EventoComponent,
    BachecaEventiComponent,
    SocioComponent,
    PoesiaSpecificaComponent,
    MostraPoesiaComponent,
    VediModuliSocioComponent,
    DataPrivacyComponent,
  ],
  imports: [
    HttpClientModule, 
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    PlyrModule,
    MatCardModule,
    MatListModule,
    YouTubePlayerModule,
    NgxSpinnerModule,
  ],
  providers: [AuthGuardComponent,RoleGuardComponent,AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
