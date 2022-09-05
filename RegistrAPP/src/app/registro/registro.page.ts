import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'; /* IMPORTANDO FORMUALRIOS DE ANGULAR */
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup;

  /* DENTRO DEL FORMALARIO PARA VALIDAR MAS DE UNA CONDICION DEBREMOS DEJARLAS DENTRO DE UN ARREGLO:
  EJ: validators.requiered,[validators.email,Validators.pattern('[a-zA-Z ]*')] */

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre' : new FormControl(Validators.pattern('[a-zA-Z ]*'),Validators.required), /* VALIDA QUE EL FORMULARIO TENGA UN MINIMO DE 3 CARACTERES Y UN MAXIMO DE 8 CARACTERES */
      'apellido' : new FormControl(Validators.pattern('[a-zA-Z ]*'),Validators.required),/* VALIDA QUE EL FORMULARIO TENGA UN MINIMO DE 3 CARACTERES Y UN MAXIMO DE 8 CARACTERES */
      'password' : new FormControl(Validators.pattern('0-9'),Validators.required),/* VALIDA QUE SEAN SOLO NUMEROS DEL 0 AL 9 Y QUE SU MAXIMO DE CARACTERES SEA DE 4 */
      'confirmPassword' : new FormControl(Validators.pattern('0-9'),Validators.required),/* VALIDA QUE SEAN SOLO NUMEROS DEL 0 AL 9 Y QUE SU MAXIMO DE CARACTERES SEA DE 4 */
      'correo' : new FormControl (Validators.email,[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]), /* VALIDA QUE EL FORMULARIO ACEPTE CARACTERES ESPECIALES Y ES CAMPO REQUERIDO */
      'seccion' : new FormControl("",Validators.required),
      'carrera' : new FormControl("",Validators.required)
    });
   }

  ngOnInit() { /* INICIO DE PROCESO DE UNA PAGINA */
    console.log('Login ngOnInit');
  }

  async guardar() { /* FUNCION ASINCRONA QUE VALIDA DATOS INGRESADOS ESTEN TODOS COMPLETOS */
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header : 'Datos Incorrectos',
        message : 'Porfavor valide la informacion del formulario',
        buttons : ['Aceptar']
      });
      await alert.present();
      return;
    }
    

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }
    
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('home');
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
  
  

}
