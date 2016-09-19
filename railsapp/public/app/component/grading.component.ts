import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

import { ProjectService } from "./../service/project.service";
import { Member, Project } from "./../service/project.service";

@Component({
  selector: "my-grading",
  templateUrl: "app/component/grading.component.html"
})

export class GradingComponent implements OnInit {
  @Input()
  member: Member;
  members: Member[];
  project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let project_id =  +params["project_id"];
      let member_id = +params["member_id"];
      this.projectService.getMember(member_id).then(
        member => this.member = member
      );
      this.projectService.getProject(project_id).then(
        project => this.project = project
      );
//      this.projectService.getMembers(1).then(
//        members => this.members = members
//      );
    });
//    console.log(this.id);
  }

  checkMember(): void {
    console.log(this.member);
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
