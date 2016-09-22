import { Injectable } from "@angular/core";
import { Headers, Http, Response, RequestOptions, RequestMethod, URLSearchParams } from "@angular/http";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ProjectService {
  private projects;
  // private projects: Project[] = [
  //   { id: 1,  title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
  //   { id: 2,  title: "idea-son", detail: "sai2 desu.yorosiku" },
  //   { id: 3,  title: "hacker", detail: "sai3 desu.yorosiku" }
  // ];

  private project;

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

  getProjects(): any {
    let url = "/project";
    this.projects = this.http.get(url).toPromise().then(
      response => this.projects = response.json()
    );
    return Promise.resolve(this.projects);
  }

  getProject(id: number): any {
    let project;
    let url = "/project";
    url = url + "/" + id;
    project = this.http.get(url).toPromise().then(
      response => project = response.json()
    );
    console.log(url);
    return Promise.resolve(project);
  }

  // getProject(id: number): Promise<Project> {
  //   let project: Project;
  //   project = this.projects.find(project => project.id === id);
  //   console.log("projcet: ");
  //   console.log(project);
  //   return Promise.resolve(project);
  // }

  getProjectsByHttp(): any {
    let url = "/project";
    let projects;

    let params = new URLSearchParams();
    params.set("name", "hanashiro");

    // projects = this.http.post(url, body, options).toPromise().then(
    projects = this.http.get(url, {search: params}).toPromise().then(
      // response => console.log(response.json())
      response => projects = response.json()
    );
    // projects = this.http.get(url).map(this.extractData).catch(this.handleError);
    return Promise.resolve(projects);
  }

  getMembers(id: number): any {
    let members;
    let url = "/members";
    url = url + "/" + id;
    members = this.http.get(url).toPromise().then(
      response => members = response.json()
    );
    return Promise.resolve(members);
//    return Promise.resolve(this.members);
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
