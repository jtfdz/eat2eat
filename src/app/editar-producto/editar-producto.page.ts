import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss', '../app.component.scss'],
})
export class EditarProductoPage implements OnInit {

	id = null;
	ionicForm: FormGroup;
	baseUrl: String = '/producto/';
	nombre: String;
	tiempo: String;
	precio: String;
	descripcion: String;
	loading: boolean = true;

  constructor(
    public authService : AuthService,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,    
    private router: Router    
    ) { this.ionicForm = this.createMyForm(); }


	volver(){
	   this.authService.establecimientoVolver();
	}

	logout(){
    	this.authService.presentAlertConfirm();
  	}

  createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],    	
      descripcion: ['', Validators.required], 
      tiempo: ['', Validators.required], 
      precio: ['', Validators.required],  
      });
  	}

	ngOnInit(){
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
	}

	ionViewDidEnter(){
  	this.authService.getRequest(this.baseUrl + this.id)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 
                    	let datos = response['data'][0];
                    	this.nombre = datos['nombre_establecimiento'];
						this.tiempo = datos['tiempo_espera_producto'];
						this.precio = datos['precio_producto'];
						this.descripcion = datos['descripcion_producto'];
						this.loading = false;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: e-p: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });
	  }

	  editar(){
	    this.authService.putRequest(this.baseUrl + this.id + '/editar', this.ionicForm.value)
	            .then((response) => {
	              console.log(response)
	              switch(response['status']) { 
	                  case 200: { 
	                    this.authService.devolver();
	                     break; 
	                   } 
	                   default: { 
	                     console.log('ERROR: e-p: put');
	                     break; 
	                  } 
	                }
	            }).catch(error => {
	                console.log(error);
	                });
	    }

}
