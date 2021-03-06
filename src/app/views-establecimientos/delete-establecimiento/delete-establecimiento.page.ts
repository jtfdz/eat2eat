import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-delete-establecimiento',
  templateUrl: './delete-establecimiento.page.html',
  styleUrls: ['./delete-establecimiento.page.scss', '../../app.component.scss'],
})
export class DeleteEstablecimientoPage implements OnInit {

	id = null;
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
  	private activatedRoute: ActivatedRoute,
  	private router: Router
  	) { }

	volver(){
	   this.authService.establecimientoVolver();
	}

	logout(){
    this.authService.presentAlertConfirm();
  	}

	ngOnInit(){
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
	}

	ionViewWillEnter(){
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
                       console.log('ERROR: b-e: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });
	  }

	  borrar(){
		  this.authService.deleteRequest(this.baseUrl + this.id + '/borrar')
		          .then((response) => {
		            console.log(response)
		            switch(response['status']) { 
		                      case 200: { 
		                        this.router.navigate(['/tabnav']); 
		                         break; 
		                       } 
		                       default: { 
		                         console.log('ERROR: b-e: delete');
		                         break; 
		                      } 
		                    }
		          }).catch(error => {
		              console.log(error);
		              });
		}
}
