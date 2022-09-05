import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  token= localStorage.getItem('token');
  constructor() { }

  ngOnInit() {
    console.log("token", this.token)
  }

}
