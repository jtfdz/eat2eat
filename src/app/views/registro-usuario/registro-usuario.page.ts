import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss', '../../app.component.scss'],
})
export class RegistroUsuarioPage {
	
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
      tipo: [2, [Validators.required]],
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
    this.loading = true;
    this.authService.postRequest(this.baseUrl, this.ionicForm.value)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                      this.router.navigate(['/login']); 
                      this.ionicForm.reset();
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
                   console.log('pelaste man');
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
