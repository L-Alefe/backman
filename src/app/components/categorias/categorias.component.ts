import { Component, OnInit } from "@angular/core";
import { CategoriasService } from "../../services/categorias.service";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"]
})
export class CategoriasComponent implements OnInit {
  categorias = [];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.categoriasService.get().subscribe(contato => {
      this.categorias = contato;
    });
  }
}
