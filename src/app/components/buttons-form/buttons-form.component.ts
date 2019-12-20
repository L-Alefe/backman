import { Component, OnInit, Input } from "@angular/core";
import { CategoriasService } from "src/app/services/categorias.service";

@Component({
  selector: "app-buttons-form",
  templateUrl: "./buttons-form.component.html",
  styleUrls: ["./buttons-form.component.css"]
})
export class ButtonsFormComponent implements OnInit {
  constructor(private categoriasService: CategoriasService) {}

  @Input() scopeCategorias: any;

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
        .updateCategoria(this.scopeCategorias)
        .subscribe(item => {
          this.voltarPagina();
        });
    } else {
      delete this.scopeCategorias["id"];
      this.categoriasService
        .inseriCategoria(this.scopeCategorias)
        .subscribe(item => {
          this.voltarPagina();
        });
    }
  };
}
