import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header class="header">
      <h1 class="m-none">
        Hello
        <img class="hello-icon" src="./assets/wave.png" alt="Hello" />
      </h1>
    </header>
  `,
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {}
