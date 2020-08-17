import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-global',
  templateUrl: './dashboard-global.page.html',
  styleUrls: ['./dashboard-global.page.scss', '../../app.component.scss'],
})
export class DashboardGlobalPage{


  baseUrl: string = '/establecimientos';	
  arr : any = [];
  loading: boolean = true;


  constructor(
    public authService : AuthService,
    private router: Router)
     {  }


  logout(){
    this.authService.presentAlertConfirm();
  }

  ionViewWillEnter(){
    this.arr = [];
  	this.authService.getRequest(this.baseUrl)
        .then((response) => {
          console.log(response)
          switch(response['status']) { 
                    case 200: { 
                      this.arr = [];
                    	for (let entry of response['data']){
                    		this.arr.push(entry);
                    	}
                      this.loading = false;
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: d: get');
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
