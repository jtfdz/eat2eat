import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-producto',
  templateUrl: './delete-producto.page.html',
  styleUrls: ['./delete-producto.page.scss', '../../app.component.scss'],
})
export class DeleteProductoPage implements OnInit {


	id = null;
	baseUrl: String = '/producto/';
	nombre: String;
	tiempo: String;
	precio: String;
	descripcion: String;
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
                    	this.nombre = datos['nombre_producto'];
						this.tiempo = datos['tiempo_espera_producto'];
						this.precio = datos['precio_producto'];
						this.descripcion = datos['descripcion_producto'];
						this.loading = false;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: b-p: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });
	  }

	  borrar(){
	  	this.loading = true;
		  this.authService.deleteRequest(this.baseUrl + this.id + '/borrar')
		          .then((response) => {
		            console.log(response)
		            switch(response['status']) { 
		                      case 200: { 
		                        this.authService.devolver();
		                         break; 
		                       } 
		                       default: { 
		                         console.log('ERROR: b-p: delete');
		                         break; 
		                      } 
		                    }
		          }).catch(error => {
		              console.log(error);
		              });
		}	  


}
