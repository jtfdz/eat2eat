import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss', '../app.component.scss'],
})
export class MapsPage implements OnInit  {

  id = null;
  map: any;
  baseUrl: string = '/establecimiento/'; 
  arrEst : any = [];
  info: any = {
    nombre: '',
    lat: '',
    lon: ''
  };

  constructor(
    public authService : AuthService,
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,    
    private router: Router    
    ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  volver(){
    this.authService.devolver();
  }



  ionViewDidEnter(){
        this.authService.getRequest(this.baseUrl + this.id)
        .then((response) => {
          switch(response['status']) { 
                    case 200: { 
                      for (let entry of response['data']){
                        this.arrEst.push(entry);
                      }
                      this.info.nombre = this.arrEst[0].nombre_establecimiento;
                      this.info.lat = parseFloat(this.arrEst[0].latitud_establecimiento);
                      this.info.lon = parseFloat(this.arrEst[0].longitud_establecimiento);
                      this.getMapLocation();
                       break; 
                     } 
                     default: { 
                       console.log('ERROR: maps: get');
                       break; 
                    } 
                  }
        }).catch(error => {
            console.log(error);
            });
  } 


  getMapLocation(){
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }


  loadMap(position){

    var myLatLngLocal = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var myLatLngEst = new google.maps.LatLng(this.info.lat, this.info.lon);

    this.map = new google.maps.Map(document.getElementById('mapElement'), {
      center: myLatLngEst,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLngLocal,
        map: this.map,
        icon: { url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"},   
        label: { color: '#FFB6C1', fontWeight: 'bold', fontSize: '14px', text: '¡tú!' }             
      });

      let markerEst = new google.maps.Marker({
        position: myLatLngEst,
        map: this.map,
        icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"},
        label: { color: '#00aaff', fontWeight: 'bold', fontSize: '14px', text: this.info.nombre }
      });

    });



    var flightPlanCoordinates = [
      {lat: position.coords.latitude, lng:position.coords.longitude},
      {lat: this.info.lat, lng: this.info.lon}
    ];

    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: 'black',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(this.map);


  }





}
