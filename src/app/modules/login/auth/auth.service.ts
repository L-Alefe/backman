import { Injectable, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../../models/usuario.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router) {}
  mostrarMenuEmitter = new EventEmitter<boolean>();
  fazerLogin = (u: Usuario) => {
    if (u.nome === "lemu" && u.senha === "123") {
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(["/"]);
    } else {
      this.mostrarMenuEmitter.emit(false);
    }
  };
}
