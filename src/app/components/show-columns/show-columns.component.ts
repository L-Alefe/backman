import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-columns",
  templateUrl: "./show-columns.component.html",
  styleUrls: ["./show-columns.component.css"]
})
export class ShowColumnsComponent implements OnInit {
  constructor() {}
  @Input() columns: any;

  ngOnInit() {}
}
