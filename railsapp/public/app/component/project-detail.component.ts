import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

import { ProjectService } from "./../service/project.service";
import { Member, Project } from "./../service/project.service";

@Component({
  selector: "my-project-detail",
  templateUrl: "app/component/project-detail.component.html"
})

export class ProjectDetailComponent implements OnInit {
  @Input()

  title: string = "saiten";
  members: Member[];
  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params["id"];
      this.projectService.getProject(id).then(
        project => this.project = project
      );
    });
    console.log(this.project);

    this.projectService.getMembers(1).then(
      members => this.members = members
    );
  }

  showMember(member: Member): void {
    console.log(member);
    let link = ["/grading", this.project.id,  member.id];
    this.router.navigate(link);
  }

  showResult(): void {
    console.log(this.project);
    let link = ["/result", this.project.id];
    this.router.navigate(link);
  }

  linkProjectList(): void {
    let link = ["/projects"];
    this.router.navigate(link);
  }

  linkProject(id: number): void {
    let link = ["/project-detail", id];
    console.log(id);
    this.router.navigate(link);
  }
}
