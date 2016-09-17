import { Component } from "@angular/core";

@Component({
  selector: "project",
  templateUrl: "app/component/project.component.html"
})

export class ProjectComponent {
  projects: Project[] = [
    { title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
    { title: "idea-son", detail: "sai2 desu.yorosiku" },
    { title: "hacker", detail: "sai3 desu.yorosiku" }
  ];

}

export class Project {
  title: string;
  detail: string;
}
