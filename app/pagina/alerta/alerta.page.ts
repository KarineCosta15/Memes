import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

telefone = '?';
email = '?';

  constructor(public alert: AlertController) { }

  async abrirAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Digite as informações abaixo!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Digite seu e-mail'
        },
        {
          name: 'tell',
          type: 'text',
          placeholder: 'Digite seu telefone'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirma Cancelamento');
          }
        }, {
          text: 'Enviar',
          handler: (dados) => {
            this.email = dados.email;
            this.telefone = dados.tell;
          }
        }
      ]
    });

    await alert.present();
}

  ngOnInit() {
  }

}
