import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { map } from "rxjs/operators";
import { ModalController, NavController, PopoverController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";
import { HttpClient } from "@angular/common/http";
import { ServiciosDatosService } from "../services/servicios-datos.service";
import { PerfilInfoComponent } from "src/app/components/perfil-info/perfil-info.component";


interface TareaInterface {
  descripcion_tarea: string;
  prioridadTarea: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  inicio_tarea: Date;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  termino_tarea: Date;
  categoriaTarea: string;
}
interface ContenedorInterface {
  id?: number;
  titulo: string;
  tareas: TareaInterface[];

}

@Component({
  selector: "app-tareas",
  templateUrl: "./tareas.page.html",
  styleUrls: ["./tareas.page.scss"],
})
export class TareasPage implements OnInit {
  [x: string]: any;
  listaTareas = [];

  showData = {};

  prioridades = [];
  categorias = [];
  nombre: string = localStorage.getItem("nomb");
  notific: any;
  ///Agrego la tarea/////
  objetivos: ContenedorInterface[] = [];
  ///en curso///
  encurso: ContenedorInterface[] = [];

  /////terminado
  finalizado: ContenedorInterface[] = [];

  descripcion = "";

  closeCard = false;

  private slides: any;

  constructor(
    private fb: FormBuilder,
    private popoverCtrl: PopoverController,
    public http: HttpClient,
    public modalCtrl: ModalController,
    private serviciosDatosService: ServiciosDatosService,
    private navCtrl: NavController
  ) {
  }

  async presentPopover(ev: any) {

    const popover = await this.popoverCtrl.create({
      component: PerfilInfoComponent,
      event: ev,
      translucent: false
    });
    return await popover.present();
  }
  ngOnInit() {
    this.obtenerTodos();
    this.categorias = this.serviciosDatosService.categorias;
    this.prioridades = this.serviciosDatosService.prioridad;
  }

  obtenerTodos() {
    return this.serviciosDatosService
      .getContenedor()
      .pipe(map((respuesta: ContenedorInterface[]) => {
        return [{
          id: -1,
          titulo: 'cotizaciones',
          tareas: []
        }, ...respuesta]
      }))
      .subscribe((respuesta: ContenedorInterface[]) => {
        
        this.objetivos = respuesta;
        respuesta.forEach((objetivo, i) => {
          this.showData[objetivo.id] = true;
          if(objetivo.id!== -1){
          this.serviciosDatosService
            .getTareas(objetivo.id)
            .subscribe((tareas: any) => {
              this.objetivos[i] = { ...this.objetivos[i], tareas };
            });}else{
              this.serviciosDatosService.getTareasCotizacion().subscribe((tareas: any) => {
                this.objetivos[i] = { ...this.objetivos[i], tareas };
              });
            }
        });
      });
  }
  handleRefresh(event) {
    this.obtenerTodos().add(() => {
      event.target.complete();
    });
  }
  drop(event: CdkDragDrop<ContenedorInterface[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  add() {
    if (this.descripcion === "") {
      return;
    }
    // this.objetivos.push({ titulo: this.descripcion, tareas: [] });
    const body = new FormData();
    body.append("titulo", this.descripcion);
    body.append("usuario_id", localStorage.getItem("usuario_id"));
    this.serviciosDatosService.addContenedor(body).subscribe((respuesta) => {
      this.obtenerTodos();
    });
    this.descripcion = "";
  }

  borrar(i: number) {
    // this.objetivos.splice(i, 1);
    this.serviciosDatosService.borrar(i).subscribe((response) => {
      this.obtenerTodos();

    });
  }

  borrarfinal(i: number) {
    this.finalizado.splice(i, 1);
  }

  async detalle(item: ContenedorInterface, index: number) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data) {
      this.serviciosDatosService
        .add({ ...data, ["contenedor_id"]: index })
        .subscribe(
          () => {
            this.obtenerTodos();
          },
          (error) => { }
        );
      // if (!Array.isArray(item.tareas)) {
      //   item.tareas = [];
      // }
      // item.tareas.push(data);
    }
  }
  ////////////////////////////////////////////////retornar segundo modal/////////////////////////////

  async crearTareas(item: ContenedorInterface, index: number) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: "my-custom-modal-css",
    });

    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
  hideCard(id) {
    if (!this.showData.hasOwnProperty(id)) {
      this.showData[id] = true;
    }
    this.showData[id] = !this.showData[id];
  }
}
