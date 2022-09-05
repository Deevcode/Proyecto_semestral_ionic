import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'inicio', url: '/inicio', icon: 'heart' },
    { title: 'contacto', url: '/contacto', icon: 'mail' },
    { title: 'login', url: '/login', icon: 'heart' },
    { title: 'registrate', url: '/registro', icon: 'mail' },

    
  ];
  public labels = ['Family'];
  constructor() {}
}
