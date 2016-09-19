import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

import { ProjectService, Project, Member, MemberOrder } from "./../service/project.service";

@Component({
  selector: "my-result",
  templateUrl: "app/component/result.component.html"
})

export class ResultComponent implements OnInit {
  @Input()
  project: Project;
  member: Member;
  members: Member[];
  memberOrder: MemberOrder[];

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

    this.projectService.getMembers(1).then(
      members => this.members = members
    );

    this.projectService.getMemberOrder().then(
      memberOrder => this.memberOrder = memberOrder
    );
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

  linkResult(): void {
    let link = ["/result", this.project.id];
    this.router.navigate(link);
  }
}
