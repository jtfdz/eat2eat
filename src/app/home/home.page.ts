import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../app.component.scss']
})
export class HomePage implements OnInit {

  ionicForm: FormGroup;
  baseUrl: string = '/login';
  error: boolean = false;
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
                      this.error = true;
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            this.error = true;
            });

    }

};
