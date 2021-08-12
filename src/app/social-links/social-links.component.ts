import { Component } from "@angular/core";

@Component({
  selector: "app-social-links",
  template: `
    <footer>
      <a
        href="https://github.com/akshay3001"
        target="_blank"
        rel="noopener noreferrer"
        class="social-links"
      >
        <i class="fab fa-github icon" aria-hidden="true"></i>
      </a>
      <a
        href="https://in.linkedin.com/in/akshay-mhatre-732a83144"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-linkedin icon" aria-hidden="true"></i>
      </a>
    </footer>
  `,
  styleUrls: ["./social-links.component.css"],
})
export class SocialLinksComponent {
}
