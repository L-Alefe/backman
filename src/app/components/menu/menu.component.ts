import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.verificarMenuMobile();
  }
  verificarMenuMobile = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 550) {
        document.getElementById("listaMobile").style.display = "none";
      } else {
        document.getElementById("listaMobile").style.display = "block";
      }
    });
    let verificarMenuMobile = 0;
    document.querySelector("#colap").addEventListener("click", e => {
      if (verificarMenuMobile == 0) {
        document.getElementById("listaMobile").style.marginBottom = "-35px";
        document.querySelector(
          "#listaMobile"
        ).innerHTML += document.querySelector(".menu").innerHTML;
        verificarMenuMobile = 1;
      } else {
        document.getElementById("listaMobile").style.marginBottom = "0px";
        document.querySelector("#listaMobile").innerHTML = "";
        verificarMenuMobile = 0;
      }
    });
  };
  sair = () => {
    location.reload();
  };
}
