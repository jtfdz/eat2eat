import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss', '../app.component.scss'],
})

export class RegistroPage {

  ionicForm: FormGroup;
  baseUrl: string = '/registro';
  loading: boolean = false;
  boton: HTMLInputElement; 

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


  //unificar con home en un servicio
  load(event: Event) {
    this.loading = true;
    this.boton = (event.target as HTMLInputElement);    
    this.boton.disabled = true;
  }

  showLoading(boo){
    this.boton.disabled = boo;
    this.loading = boo;
  }  

  ionViewDidLeave(){
    if(this.boton)
    this.showLoading(false);
  }  

  iniciar(){
    this.authService.postRequest(this.baseUrl, this.ionicForm.value)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                      this.router.navigate(['/tabnav']); 
                      this.ionicForm.reset();
                   break; 
                 } 
                case 500: { 
                          alert('~por favor chequee su conexión a internet~')
                          this.showLoading(false);
                       break; 
                     }   
                case 304: { 
                          alert('~ya has iniciado sesión~')
                          this.showLoading(false);
                       break; 
                     }                   
                 default: { 
                   console.log('pelaste man');
                   this.showLoading(false);
                   break; 
                } 
              }
    }).catch(error => {
        console.log(error);
        this.showLoading(false);
        });
  }
 

}
