import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ProjectService } from "./../service/project.service";
import { Member } from "./../service/project.service";

@Component({
  selector: "my-grading",
  templateUrl: "app/component/grading.component.html"
})

export class GradingComponent implements OnInit {
  @Input()
  member: Member;
  members: Member[];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id =  +params["id"];
      this.projectService.getMember(id).then(
        member => this.member = member
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
}
