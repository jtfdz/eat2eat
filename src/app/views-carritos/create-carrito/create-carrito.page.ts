import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {AuthService} from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-carrito',
  templateUrl: './create-carrito.page.html',
  styleUrls: ['./create-carrito.page.scss', '../../app.component.scss'],
})
export class CreateCarritoPage implements OnInit {


  baseUrl: String = '/carrito/'
	producto: any
  unidades: number = 1;
  precio: number; 
  total: number = 0;
  loading: boolean = false;
  ionicForm: FormGroup;


  constructor(
    public authService : AuthService,
  	navParams: NavParams,
    public formBuilder: FormBuilder,
  	public viewCtrl: ModalController
  	) {this.producto=navParams.get('producto'); this.ionicForm = this.createMyForm(); }

    createMyForm(){
    return this.formBuilder.group({
      producto: [this.producto.id_producto, Validators.required],      
      cantidad: [this.unidades, Validators.required]           
      });
  }

  ngOnInit() {
    this.unidades = 1;
    this.precio = parseFloat(this.producto.precio_producto.replace('$','').replace(',',''));
    this.total = this.precio;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  sumar(){
    if(this.unidades !== 99)
    this.unidades = this.unidades + 1;
    this.total = this.precio * this.unidades;
  }

  restar(){
    if(this.unidades !== 1)
    this.unidades = this.unidades - 1;
    this.total = this.precio * this.unidades;
  }


  comprar(){
    this.loading = true;
    this.authService.putRequest(this.baseUrl, this.ionicForm.value)
    .then((response) => {
      console.log(response);
      switch(response['status']) { 
                case 200: { 
                     this.dismiss();
                      this.loading = false;
                      this.ionicForm.reset();
                   break; 
                 } 
                 default: { 
                   console.log('ERROR: c-c: put');
                       this.loading = false;
                   break; 
                } 
              }
    }).catch(error => {
        console.log(error);
        this.loading = false;
        });    

  }


}
