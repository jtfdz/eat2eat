import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registro-conductor-siguiente',
  templateUrl: './registro-conductor-siguiente.page.html',
  styleUrls: ['./registro-conductor-siguiente.page.scss', '../../app.component.scss'],
})

export class RegistroConductorSiguientePage implements OnInit {

  ionicForm: FormGroup;
  baseUrl: string = '/registro-conductor';
  loading: boolean = false;
  boton: HTMLInputElement; 
  data: any;

  constructor(private router: Router, 
    public formBuilder: FormBuilder, 
    public authService : AuthService) 
  { this.ionicForm = this.createMyForm(); 
  }

    createMyForm(){
    return this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['', [Validators.required]],
      color: ['', Validators.required],
      distintivos: ['', Validators.required],    
      });
  }


  //unificar con home en un servicio
  load(event: Event) {
    this.loading = true;
    this.boton = (event.target as HTMLInputElement);    
    this.boton.disabled = true;
  }

  showLoading(boo){
    this.boton.disabled = boo;
    this.loading = boo;
  }  

  ionViewDidLeave(){
    if(this.boton)
    this.showLoading(false);
  }  



  ngOnInit() {
 	
	}

  iniciar(){



    // this.authService.postRequest(this.baseUrl, this.ionicForm.value)
    // .then((response) => {
    //   console.log(response);
    //   switch(response['status']) { 
    //             case 200: { 
    //                   this.router.navigate(['/login']); 
    //                   this.ionicForm.reset();
    //                break; 
    //              } 
    //             case 500: { 
    //                       alert('~por favor chequee su conexión a internet~')
    //                       this.showLoading(false);
    //                    break; 
    //                  }   
    //             case 304: { 
    //                       alert('~ya has iniciado sesión~')
    //                       this.showLoading(false);
    //                    break; 
    //                  }                   
    //              default: { 
    //                console.log('pelaste man');
    //                this.showLoading(false);
    //                break; 
    //             } 
    //           }
    // }).catch(error => {
    //     console.log(error);
    //     this.showLoading(false);
    //     });
  }




}
