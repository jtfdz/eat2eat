import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.scss', '../../app.component.scss'],
})
export class HeaderPrincipalComponent implements OnInit {

  constructor(
  	public authService : AuthService,
  	) { }

  ngOnInit() {}

   logout(){
    this.authService.presentAlertConfirm();
  }

}
