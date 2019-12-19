import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { CategoriaFormComponent } from "./components/categoria-form/categoria-form.component";

const routes: Routes = [
  { path: "categorias", component: CategoriasComponent },
  { path: "categorias/form/:id", component: CategoriaFormComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
