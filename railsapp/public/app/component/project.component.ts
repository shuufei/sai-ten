import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProjectService } from "./../service/project.service";
import { Project } from "./../service/project.service";

@Component({
  selector: "project",
  templateUrl: "app/component/project.component.html"
})

export class ProjectComponent implements OnInit {
  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("oninit zone");
    this.projectService.getProjects().then(
      projects => this.projects = projects
    );
  }

  showProjectDetail(project: Project): void {
    console.log("hoghoge");
    console.log(this.projects);
    console.log(project);
    let link = ["/project-detail", project.id];
    this.router.navigate(link);
  }

  linkProjectList(): void {
    let link = ["/projects"];
    this.router.navigate(link);
  }

  getHttpTest(): void {
    this.projectService.httpTest();
  }
}
