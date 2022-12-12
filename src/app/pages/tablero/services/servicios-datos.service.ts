import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiciosDatosService {
  url = "http://localhost/ejercicio_php/";
  categorias = ["metas", "equipo", "proveedores"];
  prioridad = ["Baja", "Media", "Alta"];

  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", "application/json");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Access-Control-Allow-Origin", "*");
    // this.headers. append('Key', this.keyrest);
  }
  getContenedor() {
    const usuario_id = localStorage.getItem("usuario_id");
    return this.http.get(
      this.url + "obtenerContenedores.php?usuario_id=" + usuario_id
    );
  }
  addContenedor(body) {
    return this.http.post(this.url + "crearContenedores.php", body);
  }

  add(data: any): Observable<any> {
    const body = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        body.append(key, element);
      }
    }
    return this.http.post(`${this.url}CrearTareas.php `, body);
  }
  borrar(id) {
    return this.http.post(this.url + "borrarContenedor.php?id=" + id, {});
  }
  getTareas(contenendor) {
    return this.http.get(
      this.url + "obtenerTareas.php?contenedor=" + contenendor
    );
  }
}
