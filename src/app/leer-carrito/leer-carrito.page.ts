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
  productos : any = [];
  productosInfo : any = [];
  cantidades : any = [];
  totales : any = [];

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
                      this.productos = response['data'][0].productos_carrito;
                      for (let entry of this.productos){
                        this.cantidades.push(JSON.parse(entry).cantidad)
                      }
                      
                      for (let datos of response['data']){
                        this.arr.push(datos);
                      }

                      for(let i of this.cantidades){
                        
                        this.totales.push(this.cantidades[i] + parseFloat(this.arr[i].precio.replace('$','').replace(',','')));
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
