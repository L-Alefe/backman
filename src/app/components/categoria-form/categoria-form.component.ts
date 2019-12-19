import { Component, OnInit } from "@angular/core";
import { SubjectService } from "src/app/services/subject.service.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CategoriasService } from "src/app/services/categorias.service";

@Component({
  selector: "app-categoria-form",
  templateUrl: "./categoria-form.component.html",
  styleUrls: ["./categoria-form.component.css"]
})
export class CategoriaFormComponent implements OnInit {
  scope: any = {
    descricao: "",
    status: 0
  };
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit() {
    this.requisitaCategoriaPorId();
  }
  requisitaCategoriaPorId = () => {
    let idCategoria: any = parseInt(this.route.snapshot.paramMap.get("id"));
    this.categoriasService.getPorId(idCategoria).subscribe(item => {
      this.scope.descricao = item[0].descricao;
      this.scope.status =
        item[0].status === 1
          ? (this.scope.checked = true)
          : (this.scope.checked = false);
    });
  };
}
