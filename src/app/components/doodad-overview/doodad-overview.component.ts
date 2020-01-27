import { Component, OnInit } from "@angular/core";
import { DoodadResource, Doodad } from "src/app/models/Doodad.model";
import { DoodadService } from "../../services/doodad.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-doodad-overview",
  templateUrl: "./doodad-overview.component.html",
  styleUrls: ["./doodad-overview.component.css"]
})
export class DoodadOverviewComponent implements OnInit {
  public doodadResource: DoodadResource = null;
  public error = false;

  public get ready(): boolean {
    return this.doodadResource !== null;
  }

  constructor(
    private doodadService: DoodadService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadDoodads();
  }

  public createDoodad(): void {
    this.navHelper.goToDoodadCreateForm();
  }

  public editDoodad(doodad: Doodad): void {
    this.navHelper.goToDoodadEditForm(doodad._id);
  }

  private loadDoodads(): void {
    this.doodadResource = null;
    this.error = false;
    this.doodadService.getDoodads()
      .subscribe((res) => this.doodadResource = res,
        (error) => {
          this.error = true;
          console.log("get doodads failed");
        });
  }

}
