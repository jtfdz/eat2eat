import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-conductor-siguiente',
  templateUrl: './registro-conductor-siguiente.page.html',
  styleUrls: ['./registro-conductor-siguiente.page.scss', '../../app.component.scss'],
})

export class RegistroConductorSiguientePage implements OnInit {

  ionicForm: FormGroup;
  baseUrl: string = '/registro-conductor';
  loading: boolean = false;
  userdata: any;


  constructor(private router: Router, 
    public formBuilder: FormBuilder,
    public modalController: ModalController,
    public alertController: AlertController,
    navParams: NavParams,
    public authService : AuthService) 
  { this.ionicForm = this.createMyForm(); 
    this.userdata = navParams.get('user');
  }

    createMyForm(){
    return this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['', [Validators.required]],
      coloreo: ['', Validators.required],
      distintivos: ['', Validators.required],    
      });
  }



   async dismiss() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿descartar avances?',
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
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }
      ]
    });
    await alert.present();
  }


  ngOnInit() {
 	
	}

  iniciar(){

    this.loading = true;
    var body = {};
    body = Object.assign({}, this.userdata);
    body = Object.assign(body, this.ionicForm.value);

    this.authService.postRequest(this.baseUrl, body)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                      this.router.navigate(['/login-usuario']); 
                      this.ionicForm.reset();
                      this.loading = false;
                   break; 
                 } 
                case 500: { 
                          alert('~por favor chequee su conexión a internet~')
                          this.loading = false;
                       break; 
                     }   
                case 304: { 
                          alert('~ya has iniciado sesión~')
                          this.loading = false;
                       break; 
                     }                   
                 default: { 
                   console.log('ERROR: r-c-s: post');
                   this.loading = false;
                   break; 
                } 
              }
    }).catch(error => {
        console.log(error);
        this.loading = false;
        });
  }




}
