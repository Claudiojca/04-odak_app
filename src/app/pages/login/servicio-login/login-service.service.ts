import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  [x: string]: any;
  //----- Ruta archivo conexion -----
  url = "http://localhost/ejercicio_php/";

  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  btlogin(data: any): Observable<any> {
    console.log(data);
    let params = JSON.stringify(data);
    let Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}login.php`, params, {
      headers: Headers,
    });
  }
}