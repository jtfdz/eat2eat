import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegistroConductorSiguientePage } from '../registro-conductor-siguiente/registro-conductor-siguiente.page';


@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss', '../../app.component.scss'],
})

export class RegistroConductorPage {

  ionicForm: FormGroup;
  image;
  imageData;

  constructor(private router: Router, 
    public formBuilder: FormBuilder, 
    public authService : AuthService,
    public modalController: ModalController,
  ) 
  { this.ionicForm = this.createMyForm(); }

//AGREGAR MÁS VALIDACIONES, LAS DE CONTRASE;A PARECEN NO SIRVEN
  createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', [Validators.required]],
      tipo: [3, [Validators.required]],
      passwords: this.formBuilder.group({
        password: ['', [Validators.required]], 
        passwordconfirmation: ['', [Validators.required]]
      }, {validator: this.checkPasswords} )
      });
  }

  checkPasswords(group: FormGroup){
    return group.get('password').value === group.get('passwordconfirmation').value;
  }


  async iniciar(){
    const modal = await this.modalController.create({
      component: RegistroConductorSiguientePage,
      componentProps: {
      'user': this.ionicForm.value
    }
    });
    return await modal.present();
  }
 


}
