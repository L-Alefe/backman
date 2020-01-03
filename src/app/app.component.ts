import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "./modules/login/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  title = "backman";
  mostrarMenu: boolean = false;
  keyLoad: boolean = false;
  ngOnInit() {
    window.onload = () => {
      this.keyLoad = true;
    };
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => (this.mostrarMenu = mostrar)
    );
  }
}
