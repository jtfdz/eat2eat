import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leer-carrito',
  templateUrl: './leer-carrito.page.html',
  styleUrls: ['./leer-carrito.page.scss', '../app.component.scss'],
})
export class LeerCarritoPage implements OnInit {

  baseUrl: string = '/carritos-usuario';    
  loading: boolean = true;
  arr : any = [];

  constructor(
  	public authService : AuthService,) { }

  ngOnInit() {
  }

    atras(){
    this.authService.devolver();
    }

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
                       console.log('ERROR: l-c: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });

        }

  ionViewDidLeave(){
    this.arr = []; 
  }

}
