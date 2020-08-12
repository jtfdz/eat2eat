import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-productos',
  templateUrl: './dashboard-productos.page.html',
  styleUrls: ['./dashboard-productos.page.scss', '../app.component.scss'],
})
export class DashboardProductosPage implements OnInit {

  baseUrl: string = '/productos/';	
  id = null;
  loading: boolean = true;
  arr : any = [];
  info: any = {
    coloreo: '',
    contacto: '',
    descripcion: '',
    direccion: '',
    nombre: ''
  };

  constructor(
    public authService : AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,          
    ) { }

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
                      for (let entry of response['data']){
                        this.arr.push(entry);
                      }
                      this.info.coloreo = this.arr[0].color_establecimiento;
                      this.info.contacto = this.arr[0].contacto_establecimiento;
                      this.info.descripcion = this.arr[0].descripcion_establecimiento;
                      this.info.direccion = this.arr[0].direccion_establecimiento;
                      this.info.nombre = this.arr[0].nombre_establecimiento;
						          this.loading = false;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: d-p: get');
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
