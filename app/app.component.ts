import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Dados', url: '/alerta', icon: 'file-tray-stacked' },
    { title: 'Login', url: '/login', icon: 'card' },
    { title: 'Badge', url: '/badge', icon: 'bar-chart' },
  ];

}
