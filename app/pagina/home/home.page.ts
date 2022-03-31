import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // eslint-disable-next-line max-len
  constructor(public toastCtrl1: ToastController, public toastCtrl2: ToastController, public toastCtrl3: ToastController, public toastCtrl4: ToastController,public toastCtrl5: ToastController) { }

  async toast1() {
    const toast = await this.toastCtrl1.create({
      message: 'Você escolheu Memes Engraçados',
      duration: 2000
    });
    toast.present();
  }

  async toast2() {
    const toast = await this.toastCtrl2.create({
      message: 'Você escolheu Memes Românticos',
      duration: 2000
    });
    toast.present();
  }

  async toast3() {
    const toast = await this.toastCtrl3.create({
      message: 'Você escolheu Memes de Time',
      duration: 2000
    });
    toast.present();
  }

  async toast4() {
    const toast = await this.toastCtrl4.create({
      message: 'Você escolheu Memes de Anime',
      duration: 2000
    });
    toast.present();
  }

  async toast5() {
    const toast = await this.toastCtrl5.create({
      message: 'Você escolheu Memes de Gatos',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
