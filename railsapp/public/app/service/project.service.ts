import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {
  private projects: Project[] = [
    { title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
    { title: "idea-son", detail: "sai2 desu.yorosiku" },
    { title: "hacker", detail: "sai3 desu.yorosiku" }
  ];

  private members: Member[] = [
    { id: 1, name: "sai1", detail: "sai1 desu.yorosiku" },
    { id: 2, name: "sai2", detail: "sai2 desu.yorosiku" },
    { id: 3, name: "sai3", detail: "sai3 desu.yorosiku" }
  ];

  getProjects(): Promise<Project[]> {
    console.log(this.projects);
    return Promise.resolve(this.projects);
  }

  getMembers(projectId: number): Promise<Member[]> {
    return Promise.resolve(this.members);
  }

  getMember(id: number): Promise<Member> {
    let member: Member;
    member = this.members.find(member => member.id === id);
    console.log("member:");
    console.log(member);
    return Promise.resolve(member);
    // console.log(this.members.find(member => member.id === id));
    // return this.getMembers(1).then(
    //   members => members.find(member => member.id === id)
    // );
  }
}

export class Project {
  title: string;
  detail: string;
}

export class Member {
  id: number;
  name: string;
  detail: string;
}
