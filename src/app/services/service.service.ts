import { Injectable, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class Service {
  constructor(public http: HttpClient, public direcao: string) {}
  mercadoUrl = "http://localhost:8080/" + this.direcao;

  get(): Observable<any> {
    return this.http.get(this.mercadoUrl);
  }

  getPorId(id: any): Observable<any> {
    return this.http.get(`${this.mercadoUrl}/${id}`);
  }

  deletePorId(id: any): Observable<any> {
    return this.http.delete(`${this.mercadoUrl}/excluir/${id}`);
  }

  inserir(model: any): Observable<any> {
    return this.http.post(`${this.mercadoUrl}/inserir`, model);
  }

  update(model: any): Observable<any> {
    return this.http.put(`${this.mercadoUrl}/update`, model);
  }

  getPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.mercadoUrl}/nome/${nome}`);
  }
}
