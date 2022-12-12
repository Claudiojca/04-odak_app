import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ComponentsModule } from "../../components/components.module";
import { TableroPageRoutingModule } from "./tablero-routing.module";
import { TareasPageModule } from "./tareas/tareas.module";
import { ModalPageModule } from "./modal/modal.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareasPageModule,
    TableroPageRoutingModule,
    ComponentsModule,
    ModalPageModule,
    ReactiveFormsModule
  ],
  declarations: [],
})
export class TableroPageModule {}
