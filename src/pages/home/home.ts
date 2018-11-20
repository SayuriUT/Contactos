import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  contactos = [
    {
      id: 1,
      imagen: "../assets/avatar1.png",
      nombre: "Sayuri Uyeda",
      correo: "sayuri_uyeda@hotmail.com",
      telefono: "(33) 33 70 78 09",
      facebook: "Sayuri Uyeda",
      twitter: "sayuri_ut",
      instagram: "sayuri.ut"
    }

  ]

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  contacto=ContactoPage; 
  agregar=AgregarPage;
  

  clickAgregar(c){
    this.navCtrl.push(this.agregar, {contactoN:this.contactos});
    console.log(c);
  }

  clickContacto(c){
    this.navCtrl.push(this.contacto, c);
    console.log(c);

  }

}
