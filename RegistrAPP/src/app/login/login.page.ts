import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
FormGroup,
FormControl,
Validators,
FormBuilder } from '@angular/forms' 
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  
  

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
    ) {
      this.formularioLogin = this.fb.group({
        'name': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required)
      })
    }

  ngOnInit() {
  }
  async login(){
    var form= this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.name == form.name && usuario.password == form.password){
      console.log("corecto");
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('asistencia');
    }else{
      const alert = await this.alertController.create({
        
        message: 'Login incorrecto',
        buttons: ['Aceptar'],
      });
      await alert.present();
    return;
    }
  }
}

