import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header-secundario',
  templateUrl: './header-secundario.component.html',
  styleUrls: ['./header-secundario.component.scss', '../../app.component.scss'],
})
export class HeaderSecundarioComponent implements OnInit {


  constructor(
    public authService : AuthService,        
    ) { }

  ngOnInit() {}

    logout(){
    this.authService.presentAlertConfirm();
  	}

   atras(){
    this.authService.devolver();
    }

}
