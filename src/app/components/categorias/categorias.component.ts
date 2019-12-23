import { Component, OnInit } from "@angular/core";
import { CategoriasService } from "../../services/categorias.service";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.css"]
})
export class CategoriasComponent implements OnInit {
  scope: any = {
    categorias: [],
    colunasCategorias: []
  };
  keyLoad: boolean;

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.scope.colunasCategorias = [
      { nome: "Id", id: "id", show: true },
      { nome: "Descrição", id: "descricao", show: true },
      { nome: "Status", id: "status", show: true }
    ];
    this.preencheTable();
  }
  preencheTable = () => {
    this.scope.categorias = [];
    this.keyLoad = false;
    this.categoriasService.get().subscribe(categoria => {
      this.scope.categorias = categoria;
      this.scope.categorias.map(item => {
        item.checked = false;
        this.keyLoad = true;
      });
    });
  };
}
