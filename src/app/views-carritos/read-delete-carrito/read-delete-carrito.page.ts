import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-read-delete-carrito',
  templateUrl: './read-delete-carrito.page.html',
  styleUrls: ['./read-delete-carrito.page.scss', '../../app.component.scss'],
})
export class ReadDeleteCarritoPage implements OnInit {

  baseUrl: string = '/carritos-usuario';    
  loading: boolean = true;
  arr : any = [];
  pc: any = [];
  temporal: any = [];

  constructor(
  	public authService : AuthService,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
  }

    atras(){
    this.authService.devolver();
    }

  logout(){
    this.authService.presentAlertConfirm();
  	}

  async borrar(id){
  const alert = await this.alertController.create({
      header: '¿segura de borrar el producto?',
      buttons: [
        {
          text: 'no',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'sí',
          handler: () => {
            var index = this.pc.length - 1;
            while(index >= 0){
              if(this.pc[index].producto === id){
                this.pc.splice(index, 1);
                this.loading = true;
                this.authService.putRequest(this.baseUrl + '/borrar', this.pc)
                  .then((response) => {
                    switch(response['status']) { 
                              case 200: { 
                                 this.ionViewWillEnter()
                                 break; 
                               } 
                               default: { 
                                 console.log('ERROR: b-e: put');
                                 break; 
                              } 
                            }
                  }).catch(error => {
                      console.log(error);
                      });

              }
              index -= 1;
            }            
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillEnter(){
    this.authService.getRequest(this.baseUrl)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 

                      if(response['data'].length > 0){

                      this.arr = []; 

                      for (let entry of response['data']){
                        this.arr.push(entry)
                       }

                       for(let entry of this.arr[0].productos_carrito){
                        this.pc.push(JSON.parse(entry))
                       }                    
                       

                       for(let entry of this.arr){
                        this.pc.forEach(element =>{
                          if(element.producto == entry.id_producto){
                            entry.cantidad = (entry.cantidad || 0) + element.cantidad;
                            entry.total = entry.cantidad * parseFloat(entry.precio_producto.replace('$','').replace(',',''))
                          }
                        })
                       }


                      }

                      this.loading = false;
                       break; 
                     } 
                     case 404: {
                      this.arr = []; 
                      console.log('carrito vacío :(!!!!!!!!!')
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
    this.pc = [];
  }

}
