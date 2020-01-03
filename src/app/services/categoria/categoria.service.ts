import { Injectable } from "@angular/core";
import { Service } from "../service.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoriaService extends Service {
  constructor(public http: HttpClient) {
    super(http, "categorias");
  }
}
