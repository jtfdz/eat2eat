import { Component } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-establecimiento',
  templateUrl: './crear-establecimiento.page.html',
  styleUrls: ['./crear-establecimiento.page.scss', '../app.component.scss'],
})
export class CrearEstablecimientoPage{

	seleccionColor: String = 'primary';
	ionicForm: FormGroup;
	baseUrl: string = '/establecimiento/crear';	
  loading: boolean = false;


  constructor(
    public authService : AuthService,
    public formBuilder: FormBuilder,
    private router: Router    
    ) { this.ionicForm = this.createMyForm(); }

  logout(){
    this.authService.presentAlertConfirm();
  }


//AGREGAR MÁS VALIDACIONES
  createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],    	
      coloreo: ['', Validators.required],
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      contacto: ['', Validators.required],
      });
  }


  volver(){
    this.authService.establecimientoVolver();
  }


// COLOCAR UN MENSAJE LUEGO DE ÉXITO
  iniciar(){
  this.loading = true;
	this.authService.postRequest(this.baseUrl, this.ionicForm.value)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                      this.authService.devolver(); 
                      this.ionicForm.reset();
                   break; 
                 } 
                 default: { 
                   console.log('ERROR: c-e: post');
                   break; 
                } 
              }
    }).catch(error => {
        console.log(error);
        });    

  }


}
