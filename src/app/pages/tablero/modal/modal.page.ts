import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { IonModal } from '@ionic/angular';
import { ServiciosDatosService } from '../services/servicios-datos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  categorias = [];
  nombreTarea;
  prioridadTarea;
  fechaIngreso;
  termino_tarea;
  categoriaTarea;
  categoriaTareaId;
  inicio_tarea;

  taskObject;

  repositorio: string[]; ///modal

  constructor(
    public modalCtrl: ModalController,
    private serviciosDatos: ServiciosDatosService
  ) {}

  ngOnInit() {
    this.categorias = this.serviciosDatos.categorias;
  }

  async dismis() {
    await this.modalCtrl.dismiss(false);
  }

  seleCategorias(i) {
    this.categoriaTareaId = i+1;
    this.categoriaTarea = this.categorias[i];
  }

  async crearTarea() {
    if(this.nombreTarea && this.inicio_tarea && this.termino_tarea && this.prioridadTarea &&this.categoriaTareaId ){
    this.taskObject = {
      nombreTarea: this.nombreTarea,
      inicio_tarea: this.inicio_tarea,
      termino_tarea: this.termino_tarea,
      prioridadTarea: Number(this.prioridadTarea),
      categoriaTarea: this.categoriaTareaId,
    };
console.log(this.taskObject);
    this.modalCtrl.dismiss(this.taskObject);
  }else{
    alert('faltan datos, rellene todos los campos');
  }
  }
  ///////////conexion a la base de datos
}
