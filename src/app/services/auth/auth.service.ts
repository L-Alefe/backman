import { Injectable, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../models/usuario.model";
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router, private usuarioService: UsuarioService) {}
  mostrarMenuEmitter = new EventEmitter<boolean>();
  userAutenticado: boolean = false;
  fazerLogin = (u: Usuario) => {
    this.usuarioService.getPorNome(u.nome).subscribe(result => {
      if (result) {
        if (u.nome === result.nome && u.senha === result.senha) {
          this.mostrarMenuEmitter.emit(true);
          this.userAutenticado = true;
          this.router.navigate(["categorias"]);
        } else {
          this.mostrarMenuEmitter.emit(false);
        }
      } else {
        alert("Usuário ou senha inválidos!");
      }
    });
  };

  retornaUserAutenticado = () => {
    return this.userAutenticado;
  };
}
