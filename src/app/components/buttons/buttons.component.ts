import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SubjectService } from "src/app/services/subject.service.service";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"]
})
export class ButtonsComponent implements OnInit {
  @Input() scopeCategorias: any;
  categoriaSelecionada: any = null;

  constructor(private router: Router) {}

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
}
