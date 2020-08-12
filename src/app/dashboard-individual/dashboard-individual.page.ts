import { Component } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-individual',
  templateUrl: './dashboard-individual.page.html',
  styleUrls: ['./dashboard-individual.page.scss', '../app.component.scss'],
})
export class DashboardIndividualPage{

  baseUrl: string = '/establecimientos-usuario';	
  arr : any = [];
  nombre: string;
  borrado: boolean = false;  
  editado: boolean = false; 
  loading: boolean = true;


  constructor(
    public authService : AuthService,
    private router: Router)
     {  }


  logout(){
    this.authService.presentAlertConfirm();
  }

    ionViewWillEnter(){
  	this.authService.getRequest(this.baseUrl)
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
                       console.log('ERROR: d-i: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });

        }

        



  ionViewDidLeave(){
  	this.arr = [];
    this.borrado = false;
    this.editado = false;
    this.loading = true;   
  }


  activarBorrado(){
    this.borrado = !this.borrado;
  }

  activarEditado(){
    this.editado = !this.editado;
  }


}
