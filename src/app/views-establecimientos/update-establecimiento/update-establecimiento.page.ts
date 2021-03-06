import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-establecimiento',
  templateUrl: './update-establecimiento.page.html',
  styleUrls: ['./update-establecimiento.page.scss', '../../app.component.scss'],
})
export class UpdateEstablecimientoPage implements OnInit {

	id = null;
	ionicForm: FormGroup;
	baseUrl: String = '/establecimiento/';
	nombre: String;
	coloreo: String;
	direccion: String;
	descripcion: String;
	contacto: String;
	latitud: String;
	longitud: String;	
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
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      contacto: ['', Validators.required],
      longitud: ['', Validators.required],  
      latitud: ['', Validators.required],          
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
						this.coloreo = datos['color_establecimiento'];
						this.direccion = datos['direccion_establecimiento'];
						this.descripcion = datos['descripcion_establecimiento'];
						this.contacto = datos['contacto_establecimiento'];
						this.longitud = datos['longitud_establecimiento'];
						this.latitud = datos['latitud_establecimiento'];						
						this.loading = false;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: e-e: get');
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
	                     console.log('ERROR: e-e: put');
	                     break; 
	                  } 
	                }
	            }).catch(error => {
	                console.log(error);
	                });
	    }


}
