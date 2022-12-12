import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CotizacionServicioService {
  //----- Ruta archivo conexion -----

  // url = "http://192.168.1.244/ejercicio_php/";

  headers: any;
  private url: string = environment.urlbd
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    //this.headers.append('Key',this.keyrest);
  }

  obtenerProduct(){
    let Headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(`${this.url}obtenerProductos.php`,{headers:Headers});
   }
 
}

