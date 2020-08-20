import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.page.html',
  styleUrls: ['./establecimientos.page.scss', '../../app.component.scss'],
})
export class EstablecimientosPage implements OnInit {

  baseUrl: string = '/establecimientos';	
  arr : any = [];
  loading: boolean = true;

  constructor(
    public authService : AuthService,
    )
     {  }

  logout(){
    this.authService.presentAlertConfirm();
  }

  ionViewDidLeave(){
    this.arr = [];
    this.loading = true;
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


  ngOnInit() {
  }

}
