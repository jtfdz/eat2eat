import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-leer-carrito',
  templateUrl: './leer-carrito.page.html',
  styleUrls: ['./leer-carrito.page.scss'],
})
export class LeerCarritoPage implements OnInit {

  constructor(public authService : AuthService,) { }

  ngOnInit() {
  }

  logout(){
    this.authService.presentAlertConfirm();
  	}

}
