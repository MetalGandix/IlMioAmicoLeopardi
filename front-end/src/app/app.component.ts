import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'front-end-leopardi';

  showFiller = false;
  ngOnInit() {

    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content: {
        message: "Giacomo Leopardi APP utilizza coockie per assicurarsi che tu abbia la miglior esperienza sulla sua piattaforma.",
        dismiss: "Accetto",
        link: "Informazioni",
        href: "/data-privacy"
      }
    });
  }
}
