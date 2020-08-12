import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-borrar-establecimiento',
  templateUrl: './borrar-establecimiento.page.html',
  styleUrls: ['./borrar-establecimiento.page.scss', '../app.component.scss'],
})
export class BorrarEstablecimientoPage  implements OnInit{

	id = null;
	baseUrl: String = '/establecimiento/';
	nombre: String;
	coloreo: String;
	direccion: String;
	descripcion: String;
	contacto: String;
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
