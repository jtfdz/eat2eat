import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volver-inicial',
  templateUrl: './volver-inicial.component.html',
  styleUrls: ['./volver-inicial.component.scss'],
})
export class VolverInicialComponent implements OnInit {

	@Input('nombreColor') nombreColor : string;

  constructor(private router: Router) 
  {  }

	ngOnInit() {}

}
