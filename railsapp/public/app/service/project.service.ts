import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {
  private projects: Project[] = [
    { title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
    { title: "idea-son", detail: "sai2 desu.yorosiku" },
    { title: "hacker", detail: "sai3 desu.yorosiku" }
  ];

  private members: Member[] = [
    { name: "sai1", detail: "sai1 desu.yorosiku" },
    { name: "sai2", detail: "sai2 desu.yorosiku" },
    { name: "sai3", detail: "sai3 desu.yorosiku" }
  ];

  getProjects(): Promise<Project[]> {
    console.log(this.projects);
    return Promise.resolve(this.projects);
  }

  getMembers(projectId: number): Promise<Member[]> {
    return Promise.resolve(this.members);
  }
}

export class Project {
  title: string;
  detail: string;
}

export class Member {
  name: string;
  detail: string;
}
