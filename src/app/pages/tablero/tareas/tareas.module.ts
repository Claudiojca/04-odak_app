import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TareasPageRoutingModule } from "./tareas-routing.module";

import { TareasPage } from "./tareas.page";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareasPageRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [TareasPage],
  exports: [TareasPage],
})
export class TareasPageModule {}
