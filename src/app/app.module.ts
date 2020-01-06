import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { CategoriasComponent } from "./modules/categorias/categorias.component";
import { MenuComponent } from "./components/menu/menu.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { CategoriaFormComponent } from "./modules/categorias/categoria-form/categoria-form.component";
import { ButtonsFormComponent } from "./components/buttons-form/buttons-form.component";
import { PreLoadingComponent } from "./components/pre-loading/pre-loading.component";
import { ShowColumnsComponent } from "./components/show-columns/show-columns.component";
import { FilterInputComponent } from "./components/filter-input/filter-input.component";
import { TableComponent } from "./components/table/table.component";
import { LoginComponent } from "./modules/login/login.component";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuardService } from "./services/guard/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    MenuComponent,
    ButtonsComponent,
    CategoriaFormComponent,
    ButtonsFormComponent,
    PreLoadingComponent,
    ShowColumnsComponent,
    FilterInputComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
