import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "../../services/categoria/categoria.service";

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
  keyLoad: boolean = false;

  constructor(private categoriasService: CategoriaService) {}

  ngOnInit() {
    this.scope.colunasCategorias = [
      { nome: "Id", id: "id", show: true },
      { nome: "Descrição", id: "descricao", show: true },
      { nome: "Status", id: "status", show: true }
    ];
    this.preencheTable();
  }

  filtraTabela = (event: any) => {
    if (event) {
      this.keyLoad = false;
      this.categoriasService.getPorNome(event).subscribe(result => {
        let aux: any = [];
        aux.push(result);
        this.scope.categorias = aux;
      });
      this.keyLoad = true;
    } else {
      this.preencheTable();
    }
  };

  preencheTable = () => {
    this.keyLoad = false;
    this.categoriasService.get().subscribe(categoria => {
      this.scope.categorias = categoria;
      this.scope.categorias.map(item => {
        item.checked = false;
      });
      this.keyLoad = true;
    });
  };
}
