import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter-input",
  templateUrl: "./filter-input.component.html",
  styleUrls: ["./filter-input.component.css"]
})
export class FilterInputComponent implements OnInit {
  @Output() filtro = new EventEmitter();
  model: any;

  constructor() {}

  ngOnInit() {}

  filtraTabela = () => {
    this.filtro.emit(this.model);
  };
}
