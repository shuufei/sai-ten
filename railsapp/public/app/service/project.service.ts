import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ProjectService {
  private projects: Project[] = [
    { id: 1,  title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
    { id: 2,  title: "idea-son", detail: "sai2 desu.yorosiku" },
    { id: 3,  title: "hacker", detail: "sai3 desu.yorosiku" }
  ];

  private members: Member[] = [
    { id: 1, name: "sai1", detail: "sai1 desu.yorosiku", order: 1, image: "sai-account1" },
    { id: 2, name: "sai2", detail: "sai2 desu.yorosiku", order: 2, image: "sai-account2" },
    { id: 3, name: "sai3", detail: "sai3 desu.yorosiku", order: 3, image: "sai-account3" },
    { id: 4, name: "sai4", detail: "sai4 desu.yorosiku", order: 4, image: "sai-account4" }
  ];

  private memberOrder: MemberOrder[] = [
    { id: 1, name: "sai1", order: 1, excitement: 5, possibility: 4, young: 4, total: 13},
    { id: 2, name: "sai2", order: 2, excitement: 2, possibility: 3, young: 4, total: 9},
    { id: 3, name: "sai3", order: 3, excitement: 5, possibility: 1, young: 2, total: 8},
    { id: 4, name: "sai4", order: 4, excitement: 1, possibility: 2, young: 2, total: 5}
  ];

  private testUrl = "/member";  // URL to web api
  private header = new Headers({"xhrFields": {"withCredentials": true}});

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    console.log(this.projects);
    return Promise.resolve(this.projects);
  }

  getProject(id: number): Promise<Project> {
    let project: Project;
    project = this.projects.find(project => project.id === id);
    console.log("projcet: ");
    console.log(project);
    return Promise.resolve(project);
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

  getMemberOrder(): Promise<MemberOrder[]> {
    return Promise.resolve(this.memberOrder);
  }

  httpTest(): void {
//    this.http.get(this.testUrl, {headers: this.header}).toPromise().then(
//      response => console.log(response)
//    );
    this.http.get(this.testUrl).toPromise().then(
      response => console.log(response.json())
    );
  }
}

export class Project {
  id: number;
  title: string;
  detail: string;
}

export class Member {
  id: number;
  name: string;
  detail: string;
  order: number;
  image: string;
}

export class MemberOrder {
  id: number;
  name: string;
  order: number;
  excitement: number;
  possibility: number;
  young: number;
  total: number;
}
