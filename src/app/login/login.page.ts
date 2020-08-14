import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../app.component.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  baseUrl: string = '/login';
  error: boolean = false;
  errorText: String = '~los datos ingresados no están registrados~';
  loading: boolean = false;
  boton: HTMLInputElement;

  ngOnInit() {

  }

  constructor(
    public formBuilder: FormBuilder, 
    private authService : AuthService, 
    private router: Router) 
  { this.ionicForm = this.createMyForm(); }


  private createMyForm(){
    return this.formBuilder.group({
      username: ['', Validators.required], 
	    password: ['', Validators.required], 
	    });
	}

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

  showError(errorMsg){
    this.error = true;
    this.errorText = errorMsg;
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
                          this.showError('~por favor chequee su conexión a internet~')
                       break; 
                     }   
                    case 304: { 
                          this.showError('~ya has iniciado sesión~')
                       break; 
                     }                                             
                     default: { 
                      this.error = true;
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            this.showError('~los datos ingresados no están registrados~')
            });

    }
}
