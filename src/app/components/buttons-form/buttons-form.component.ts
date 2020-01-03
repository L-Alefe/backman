import { Component, OnInit, Input } from "@angular/core";
import { CategoriaService } from "../../services/categoria/categoria.service";

@Component({
  selector: "app-buttons-form",
  templateUrl: "./buttons-form.component.html",
  styleUrls: ["./buttons-form.component.css"]
})
export class ButtonsFormComponent implements OnInit {
  constructor(private categoriasService: CategoriaService) {}

  @Input() scopeCategorias: any;
  @Input() isView: any;
  ngOnInit() {}
  voltarPagina = () => {
    history.back();
  };
  verificarEditaOuSalva = () => {
    this.scopeCategorias.status === true
      ? (this.scopeCategorias.status = 1)
      : (this.scopeCategorias.status = 0);
    if (this.scopeCategorias.id) {
      this.categoriasService
        .update(this.scopeCategorias)
        .subscribe(() => this.voltarPagina());
    } else {
      delete this.scopeCategorias["id"];
      this.categoriasService
        .inserir(this.scopeCategorias)
        .subscribe(() => this.voltarPagina());
    }
  };
}
