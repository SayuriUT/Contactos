import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactoN=this.navParams.get("contactoN");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  nombreN = '';
  telefonoN = '';
  correoN= '';
  facebookN= '';
  twitterN= '';
  instagramN= '';
  contactoN = [];

  clickContactoN(){

    if (this.nombreN.length > 0 || this.telefonoN.length > 0){
      this.contactoN.push({nombre: this.nombreN, telefono: this.telefonoN, correo: this.correoN,facebook: this.facebookN,twitter: this.twitterN, instagram: this.instagramN, imagen:"../assets/avatar2.png"});
      this.nombreN = '';
      this.telefonoN = '';
      this.correoN= '';
      this.facebookN= '';
      this.twitterN= '';
      this.instagramN= '';
      
    }
    else {
      console.log("El contacto debe de tener nombre y teléfono");

      const alert = this.alertCtrl.create({
        title:"Oops!",
        subTitle: "El contacto debe de tener nombre y teléfono",
        buttons: ['Ok']
      });
      alert.present();
    }
  }
}
