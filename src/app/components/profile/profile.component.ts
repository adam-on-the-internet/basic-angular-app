import { Component, OnInit } from "@angular/core";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  public get userDetails(): any {
    return CookieHelper.getUserDetails();
  }

  constructor() { }

  ngOnInit() {
  }

}
