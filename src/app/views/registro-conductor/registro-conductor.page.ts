import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss', '../../app.component.scss'],
})

export class RegistroConductorPage {

  ionicForm: FormGroup;

  constructor(private router: Router, 
    public formBuilder: FormBuilder, 
    public authService : AuthService) 
  { this.ionicForm = this.createMyForm(); }

//AGREGAR MÁS VALIDACIONES, LAS DE CONTRASE;A PARECEN NO SIRVEN
  createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', [Validators.required]],
      passwords: this.formBuilder.group({
        password: ['', [Validators.required]], 
        passwordconfirmation: ['', [Validators.required]]
      }, {validator: this.checkPasswords} )
      });
  }

  checkPasswords(group: FormGroup){
    return group.get('password').value === group.get('passwordconfirmation').value;
  }


  iniciar(){

  }
 


}
