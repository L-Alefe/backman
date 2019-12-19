import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { MenuComponent } from "./components/menu/menu.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { CategoriaFormComponent } from "./components/categoria-form/categoria-form.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    MenuComponent,
    ButtonsComponent,
    CategoriaFormComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
