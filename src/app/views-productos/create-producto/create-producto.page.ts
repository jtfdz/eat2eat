import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.page.html',
  styleUrls: ['./create-producto.page.scss', '../../app.component.scss'],
})
export class CreateProductoPage implements OnInit {

    id = null;
    ionicForm: FormGroup;
    baseUrl: string = '/producto-crear/';
    loading: boolean = false;

  constructor(
    public authService : AuthService,
    private router: Router,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,          
    ) { this.ionicForm = this.createMyForm(); }

  createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],      
      descripcion: ['', Validators.required], 
      tiempo: ['', Validators.required], 
      precio: ['', Validators.required],             
      });
  }

  volver(){
    this.authService.establecimientoVolver();
  }
  
    logout(){
    this.authService.presentAlertConfirm();
  	}

  ngOnInit(){
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
	}

  iniciar(){
  this.loading = true;
  this.authService.postRequest(this.baseUrl + this.id, this.ionicForm.value)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                      this.authService.devolver();
                      this.ionicForm.reset();
                   break; 
                 } 
                 default: { 
                   console.log('ERROR: c-p: post');
                   break; 
                } 
              }
    }).catch(error => {
        console.log(error);
        });    

  }

}
