import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, PatternValidator} from '@angular/forms'; /* IMPORTANDO FORMUALRIOS DE ANGULAR */
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup; /* INICIANDO LA VARIABLE COMO FORMULARIO */

  /* DENTRO DEL FORMALARIO PARA VALIDAR MAS DE UNA CONDICION DEBREMOS DEJARLAS DENTRO DE UN ARREGLO:
  EJ: validators.requiered,[validators.email,Validators.pattern('[a-zA-Z ]*')] */

  constructor(public fb: FormBuilder, /* CONSTRUCTOR DE FORMULARIO */
    public alertController: AlertController, /* CONSTRUCTOR PARA LAS ALERTAS */
    public navCtrl: NavController) { /* CONSTRUCTOR DE CONTROLADOR */

    this.formularioLogin = this.fb.group({ /* DATOS PARA EL FORMULARIO DE LOGIN */
      'correo' : new FormControl (Validators.email,[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]), /* VALIDA QUE EL FORMULARIO TENGA SOLO LETRAS PARA EL CORREO ELECTRONICO Y ES CAMPO REQUERIDO */
      'password': new FormControl(Validators.pattern('0-9'),Validators.required) /* VALIDA QUE SEAN SOLO NUMEROS DEL 0 AL 9 Y ES CAMPO REQUERIDO */
    });

  }

  ngOnInit() { /* INICIO DE PROCESO DE UNA PAGINA */
    console.log('Login ngOnInit');
  }

  ngOnDestroy(){ /* FIN DE LA EJECUCCION DE PROCESOS */
    console.log('Login ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('Login ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('Login ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('Login ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('Login ionViewDidLeave');
  }

  async ingresar() { /* FUNCION QUE VALIDA DATOS INGRESADOS SEAN CORRECTOS CON LOS GENERADOS EN /registro */
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.correo == f.correo && usuario.password == f.password){
      const alert = await this.alertController.create({ /* MENSAJE DE ALERTA SI LOS DATOS SON CORRECTOS */
        header : 'Hola Denuevo',
        message : 'Bienvenido otra vez',
        buttons : ['Aceptar']
      });
      await alert.present();
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
      return;
      
    }
    else{
      const alert = await this.alertController.create({ /* MENSAJE DE ALERTA SI LOS DATOS SON INCORRECTOS */
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });
      
      await alert.present();
      return;
    }
  }

}
