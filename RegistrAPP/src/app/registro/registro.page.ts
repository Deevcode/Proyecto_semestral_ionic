import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioRegistro = this.fb.group({
    'name': new FormControl("", [Validators.required, Validators.minLength(2)]),
    'password': new FormControl("", [Validators.required, Validators.minLength(2)]),
    'confirmaPassword': new FormControl("", [Validators.required, Validators.minLength(2)])
  });
   }

  ngOnInit() {
  }

  async registro(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        
        message: 'datos inválidos!',
        buttons: ['Aceptar'],
      });
    
      await alert.present();
    return;
  }

  var usuario={
    name: form.name,
    password: form.password
  }

  localStorage.setItem('usuario', JSON.stringify(usuario))

}

}
