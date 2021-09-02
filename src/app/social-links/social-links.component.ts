import { Component } from "@angular/core";
import { SOCIAL_LINKS } from "./social-links.constant";

@Component({
  selector: "app-social-links",
  templateUrl: "./social-links.component.html",
})
export class SocialLinksComponent {
  readonly links = SOCIAL_LINKS;
}
