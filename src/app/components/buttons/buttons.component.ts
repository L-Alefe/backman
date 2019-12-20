import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { SubjectService } from "src/app/services/subject.service.service";
import { CategoriasService } from "src/app/services/categorias.service";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"]
})
export class ButtonsComponent implements OnInit {
  @Input() scopeCategorias: any;
  @Output() reloadEmitter = new EventEmitter();
  categoriaSelecionada: any = null;

  constructor(
    private router: Router,
    private categoriaService: CategoriasService
  ) {}

  ngOnInit() {}

  validaEdicao = () => {
    let cont = 0;
    this.scopeCategorias.map(categoria => {
      if (categoria.checked) {
        this.categoriaSelecionada = categoria;
        cont++;
      }
    });
    if (cont === 0) {
      alert("Selecione pelo menos um registro.");
      // this.categoriaSelecionada = null;
    } else if (cont > 1) {
      alert("Selecione apenas um registro.");
    } else {
      this.router.navigate([
        `/categorias/form/${this.categoriaSelecionada.id}`
      ]);
    }
  };

  excluiCategoria = () => {
    let cont = 0;
    let idSelecionado = null;
    this.scopeCategorias.map(categoria => {
      if (categoria.checked) {
        this.categoriaSelecionada = categoria;
        idSelecionado = this.categoriaSelecionada.id;
        cont++;
      }
    });
    if (cont === 0) {
      alert("Selecione pelo menos um registro.");
      idSelecionado = null;
    } else if (cont > 1) {
      alert("Só se pode excluir um por vez.");
      idSelecionado = null;
    } else {
      this.categoriaService.deletePorId(idSelecionado).subscribe(item => {
        if (item) {
          this.reloadEmitter.emit();
          alert("Registro excluído com sucesso!");
        }
      });
    }
  };
}
