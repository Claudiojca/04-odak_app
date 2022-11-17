import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableroPageRoutingModule } from './tablero-routing.module';

import { TableroPage } from './tablero.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TableroPage]
})
export class TableroPageModule {}
