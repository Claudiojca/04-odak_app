import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { PerfilInfoComponent } from './perfil-info/perfil-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PerfilInfoComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PerfilInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
