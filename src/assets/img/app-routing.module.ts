import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NuestrosProductosComponent } from './components/nuestros-productos/nuestros-productos.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';


const routes: Routes = [
  {path: 'sobrenosotros', component: SobreNosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'nuestrosproductos', component: NuestrosProductosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
