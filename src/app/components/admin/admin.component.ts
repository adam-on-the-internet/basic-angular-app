import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  public users: any[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.users);
  }

  constructor(
    private userService: UserService,
  ) { }

  public ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.users = null;
    this.userService.getAllUsers()
      .subscribe((res) => this.users = res,
        (error) => {
          console.log("get contraptions failed");
        });
  }

}
