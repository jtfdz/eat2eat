import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-local',
  templateUrl: './dashboard-local.page.html',
  styleUrls: ['./dashboard-local.page.scss', '../../app.component.scss'],
})
export class DashboardLocalPage{

  baseUrl: string = '/establecimientos-usuario';	
  arr : any = [];
  nombre: string;
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
    this.loading = true;   
  }


}
