import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CategoriaService } from "../../../services/categoria/categoria.service";

@Component({
  selector: "app-categoria-form",
  templateUrl: "./categoria-form.component.html",
  styleUrls: ["./categoria-form.component.css"]
})
export class CategoriaFormComponent implements OnInit {
  scope: any = {
    descricao: "",
    status: 0,
    id: null
  };
  subscription: Subscription;
  isView: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriaService
  ) {}

  ngOnInit() {
    this.requisitaCategoriaPorId();
  }
  requisitaCategoriaPorId = () => {
    if (Boolean(this.route.snapshot.paramMap.get("v"))) {
      this.isView = true;
    }
    let idCategoria: any =
      parseInt(this.route.snapshot.paramMap.get("id")) || null;
    if (idCategoria) {
      this.categoriasService.getPorId(idCategoria).subscribe(item => {
        let key = item.length - 1;
        this.scope = item[key];
      });
    }
  };
}
