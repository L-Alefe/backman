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
}
