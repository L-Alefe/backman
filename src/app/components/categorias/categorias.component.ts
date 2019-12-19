import { Component, OnInit } from "@angular/core";
import { CategoriasService } from "../../services/categorias.service";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"]
})
export class CategoriasComponent implements OnInit {
  scope: any = {
    categorias: []
  };

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.preencheTable();
  }
  preencheTable = () => {
    this.categoriasService.get().subscribe(categoria => {
      this.scope.categorias = categoria;
      this.scope.categorias.map(item => {
        item.checked = false;
      });
    });
  };
}
