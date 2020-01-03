import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasComponent } from "./modules/categorias/categorias.component";
import { CategoriaFormComponent } from "./modules/categorias/categoria-form/categoria-form.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./modules/login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "categorias/form/:id", component: CategoriaFormComponent },
  { path: "categorias/form", component: CategoriaFormComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
