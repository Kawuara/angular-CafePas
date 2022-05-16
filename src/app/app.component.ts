import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CafePas';

  constructor(private route: Router){}
  
  SobreNosotros(){
    this.route.navigate(['sobrenosotros']);
  }
  Contacto(){
    this.route.navigate(['contacto']);
  }
  Inicio(){
    this.route.navigate(['inicio'])
  }
  NuestrosProductos(){
    this.route.navigate(['nuestrosproductos'])
  }
}
