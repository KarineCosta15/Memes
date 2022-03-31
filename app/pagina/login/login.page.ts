/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string ='karine';
  senha: string = '123456';
  userDigitado: string;
  senhaDigitada: string;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  login() {
    if(this.userDigitado == this.user && this.senhaDigitada == this.senha){
      window.location.href = "/boas-vindas";
    } else {
      alert("login ou senha incorretos");
    }
  }
}
