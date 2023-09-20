import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BaseResourceServiceService {

  constructor(private http: HttpClient) {}
  // Método para consumir a API
  getDados(path) {
   // let baseUrl = 'http://localhost:8080/cfaweb/';
    let baseUrl = 'viacep.com.br/ws/01001000';
    // Requisição HTTP
    return this.http.get<any>(baseUrl+path);
  }
}
