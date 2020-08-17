import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-local-productos',
  templateUrl: './dashboard-local-productos.page.html',
  styleUrls: ['./dashboard-local-productos.page.scss', '../../app.component.scss'],
})
export class DashboardLocalProductosPage implements OnInit {


  baseUrl: string = '/productos/';
  baseUrlEst: string = '/establecimiento/';  	
  id = null;
  arr : any = [];
  arrEst : any = [];
  info: any = {
    coloreo: '',
    contacto: '',
    descripcion: '',
    direccion: '',
    nombre: ''
  };
  loading: boolean = true;

  constructor(
    public authService : AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,          
    ) { }

  logout(){
    this.authService.presentAlertConfirm();
  	}

   atras(){
    this.authService.devolver();
    }

  ngOnInit(){
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
	}

  siguiente(){
    let ruta = '/create-producto/' + this.id;
    this.router.navigate([ruta]);
  }

	ionViewWillEnter(){

    this.authService.getRequest(this.baseUrlEst + this.id)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 
                      for (let entry of response['data']){
                        this.arrEst.push(entry);
                      }
                      this.info.identificacion = this.arrEst[0].id_establecimiento;
                      this.info.coloreo = this.arrEst[0].color_establecimiento;
                      this.info.contacto = this.arrEst[0].contacto_establecimiento;
                      this.info.descripcion = this.arrEst[0].descripcion_establecimiento;
                      this.info.direccion = this.arrEst[0].direccion_establecimiento;
                      this.info.nombre = this.arrEst[0].nombre_establecimiento;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: d-p-i: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });



  	this.authService.getRequest(this.baseUrl + this.id)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 
                      for (let entry of response['data']){
                        this.arr.push(entry);
                      }
						          this.loading = false;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: d-p-i: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });
	  }

  ionViewDidLeave(){
    this.arr = [];
    this.loading = true;   
  }


}
