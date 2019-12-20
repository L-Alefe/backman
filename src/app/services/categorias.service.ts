import { Injectable, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  produtoUrl = "http://localhost:8080/categorias";
  constructor(private http: HttpClient) {}
  get(): Observable<any> {
    return this.http.get(this.produtoUrl);
  }
  getPorId(id: any): Observable<any> {
    return this.http.get(`${this.produtoUrl}/${id}`);
  }
  deletePorId(id: any): Observable<any> {
    return this.http.delete(`${this.produtoUrl}/excluir/${id}`);
  }
}
