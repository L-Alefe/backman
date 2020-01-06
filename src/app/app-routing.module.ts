import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasComponent } from "./modules/categorias/categorias.component";
import { CategoriaFormComponent } from "./modules/categorias/categoria-form/categoria-form.component";
import { LoginComponent } from "./modules/login/login.component";
import { AuthGuardService } from "./services/guard/auth-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [AuthGuardService] },
  { path: "login", component: LoginComponent },
  {
    path: "categorias",
    component: CategoriasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "categorias/form/:id",
    component: CategoriaFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "categorias/form",
    component: CategoriaFormComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
