import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <section class="section">
      <main class="info">
        <app-header></app-header>
        <app-personal-details></app-personal-details>
        <app-social-links></app-social-links>
      </main>
    </section>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
