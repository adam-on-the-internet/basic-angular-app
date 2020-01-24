import { Component, Input } from "@angular/core";
import { Doodad } from "src/app/models/Doodad.model";

@Component({
  selector: "app-doodad-display",
  templateUrl: "./doodad-display.component.html",
  styleUrls: ["./doodad-display.component.css"]
})
export class DoodadDisplayComponent {
  @Input() public doodad: Doodad = null;

  public get show(): boolean {
    return this.doodad !== null;
  }
}
