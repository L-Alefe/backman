import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Usuario } from "../../models/usuario.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) {}
  ngOnInit() {}
  login = () => {
    this.auth.fazerLogin(this.usuario);
  };
}
