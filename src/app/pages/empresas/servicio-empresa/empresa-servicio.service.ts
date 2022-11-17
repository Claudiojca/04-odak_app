import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServicioService {
  
//----- Ruta archivo conexion -----

  url = "http://localhost/ejercicio_php/";

  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    //this.headers.append('Key',this.keyrest);
  }

  obtenerEmpre(){
    let Headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(`${this.url}obtenerEmpresas.php`,{headers:Headers});
   }

}


