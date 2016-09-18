import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProjectService } from "./../service/project.service";
import { Member } from "./../service/project.service";

@Component({
  selector: "my-project-detail",
  templateUrl: "app/component/project-detail.component.html"
})

export class ProjectDetailComponent implements OnInit {
  title: string = "saiten";
  members: Member[];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectService.getMembers(1).then(
      members => this.members = members
    );
  }

  showMember(member: Member): void {
    console.log(member);
    let link = ["/grading", member.id];
    this.router.navigate(link);
  }
}
