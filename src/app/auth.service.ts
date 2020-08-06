import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:3000';

  httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin':'*'
      // }),
      withCredentials: true
     };

  
  
  constructor(
  	private http : HttpClient,
  	private router: Router, 
  	public alertController: AlertController
  	) { }

  public postRequest(url, grupoForma) {
    return this.http.post(this.baseUrl + url, grupoForma, this.httpOptions).toPromise()
  }

  public getRequest(url) {
    return this.http.get(this.baseUrl + url, this.httpOptions).toPromise()
  }

  public deleteRequest(url) {
    return this.http.delete(this.baseUrl + url, this.httpOptions).toPromise()
  }

  public putRequest(url, grupoForma) {
    return this.http.put(this.baseUrl + url, grupoForma, this.httpOptions).toPromise()
  }


   async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿desea cerrar sesión?',
      //message: '',
      buttons: [
        {
          text: 'no',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'sí',
          handler: () => {
            this.getRequest('/logout')
            .then((response) => {
              this.router.navigate(['/home']); 
            }).catch(error => {
                console.log(error);
              });
          }
        }
      ]
    });
    await alert.present();
  }



   async establecimientoVolver() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿descartar avances?',
      buttons: [
        {
          text: 'no',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'sí',
          handler: () => {
            this.router.navigate(['/tabnav']); 
          }
        }
      ]
    });
    await alert.present();
  }


  
}