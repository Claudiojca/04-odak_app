import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  AnimationController,
  Animation,
  AlertController,
  NavController,
  LoadingController,
} from "@ionic/angular";
import { DataService } from "src/app/services/data.service";
import { LoginService } from "src/app/pages/login/servicio-login/login-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  nombre: string = localStorage.getItem("nomb");

  loading: HTMLIonLoadingElement;
  logoalert = "/assets/image/Pulpo.png";

  //----- Datos ingresados -----
  correo: "emzero1@gmail.com";
  clave: "123";


  @ViewChild("pie", { static: false }) pie: ElementRef;

  HttpClientModule: any;

  constructor(
    private animationCtrl: AnimationController,
    private LoginService: LoginService,
    private loadingCtrl: LoadingController,
    public servicio: DataService,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  //----- Boton Ingresar -----

  async Ingresar() {
    let data_cruda = {
      correo: this.correo,
      clave: this.clave,
    };

    this.LoginService.btlogin(data_cruda).subscribe(async (respuesta) => {
      console.log(respuesta);
      if (respuesta == "") {
        const alert = await this.alertCtrl.create({
          header: "¡Ha ocurrido un problema!",
          subHeader: "Correo o Clave no son correctos",
          buttons: ["Aceptar"],
        });
        await alert.present();
      } else {
        localStorage.setItem("nomb", respuesta[0].nombre);
        localStorage.setItem("apell", respuesta[0].apellidos);
        localStorage.setItem("ecorreo", respuesta[0].correo);
        localStorage.setItem("enomb", respuesta[0].nombre_fantasia);
        localStorage.setItem("edirec", respuesta[0].direccion);
        localStorage.setItem("efono", respuesta[0].telefono);
        localStorage.setItem("udescrip", respuesta[0].descripcion);
        localStorage.setItem("logoemp", respuesta[0].imagen_logo);
        localStorage.setItem("usuario_id", respuesta[0].id);
        this.navCtrl.navigateRoot("/inicio");
        const alert = await this.alertCtrl.create({
          header: "¡Bienvenido a Odak!",
          subHeader: respuesta[0].nombre +' '+  respuesta[0].apellidos,
          buttons: ["Aceptar"],
        });
        await alert.present();
      }
    });
  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  async showLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    this.loading.present();
  }

  //----- Animacion -----
  ngAfterViewInit() {
    const pieanimacion: Animation = this.animationCtrl
      .create()
      .addElement(this.pie.nativeElement)
      .duration(1000)
      .fromTo("transform", "translateY(40px)", "translateY(0px)")
      .fromTo("opacity", "0", "1");
    pieanimacion.play();
  }
}
