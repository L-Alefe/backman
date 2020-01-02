import { Injectable, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  mercadoUrl = "http://localhost:8080/categorias";
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.mercadoUrl);
  }

  getPorId(id: any): Observable<any> {
    return this.http.get(`${this.mercadoUrl}/${id}`);
  }

  deletePorId(id: any): Observable<any> {
    return this.http.delete(`${this.mercadoUrl}/excluir/${id}`);
  }

  inseriCategoria(model: any): Observable<any> {
    return this.http.post(`${this.mercadoUrl}/inserir`, model);
  }

  updateCategoria(model: any): Observable<any> {
    return this.http.put(`${this.mercadoUrl}/update`, model);
  }

  getCategoriaPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.mercadoUrl}/nome/${nome}`);
  }
}
