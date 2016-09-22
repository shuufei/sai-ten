"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.members = [
            { id: 1, name: "sai1", detail: "sai1 desu.yorosiku", order: 1, image: "sai-account1" },
            { id: 2, name: "sai2", detail: "sai2 desu.yorosiku", order: 2, image: "sai-account2" },
            { id: 3, name: "sai3", detail: "sai3 desu.yorosiku", order: 3, image: "sai-account3" },
            { id: 4, name: "sai4", detail: "sai4 desu.yorosiku", order: 4, image: "sai-account4" }
        ];
        this.memberOrder = [
            { id: 1, name: "sai1", order: 1, excitement: 5, possibility: 4, young: 4, total: 13 },
            { id: 2, name: "sai2", order: 2, excitement: 2, possibility: 3, young: 4, total: 9 },
            { id: 3, name: "sai3", order: 3, excitement: 5, possibility: 1, young: 2, total: 8 },
            { id: 4, name: "sai4", order: 4, excitement: 1, possibility: 2, young: 2, total: 5 }
        ];
        this.testUrl = "/member"; // URL to web api
        this.header = new http_1.Headers({ "xhrFields": { "withCredentials": true } });
    }
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        var url = "/project";
        this.projects = this.http.get(url).toPromise().then(function (response) { return _this.projects = response.json(); });
        return Promise.resolve(this.projects);
    };
    ProjectService.prototype.getProject = function (id) {
        var project;
        var url = "/project";
        url = url + "/" + id;
        project = this.http.get(url).toPromise().then(function (response) { return project = response.json(); });
        console.log(url);
        return Promise.resolve(project);
    };
    // getProject(id: number): Promise<Project> {
    //   let project: Project;
    //   project = this.projects.find(project => project.id === id);
    //   console.log("projcet: ");
    //   console.log(project);
    //   return Promise.resolve(project);
    // }
    ProjectService.prototype.getProjectsByHttp = function () {
        var url = "/project";
        var projects;
        var params = new http_1.URLSearchParams();
        params.set("name", "hanashiro");
        // projects = this.http.post(url, body, options).toPromise().then(
        projects = this.http.get(url, { search: params }).toPromise().then(
        // response => console.log(response.json())
        function (response) { return projects = response.json(); });
        // projects = this.http.get(url).map(this.extractData).catch(this.handleError);
        return Promise.resolve(projects);
    };
    ProjectService.prototype.getMembers = function (id) {
        var members;
        var url = "/members";
        url = url + "/" + id;
        members = this.http.get(url).toPromise().then(function (response) { return members = response.json(); });
        return Promise.resolve(members);
        //    return Promise.resolve(this.members);
    };
    ProjectService.prototype.getMember = function (id) {
        var member;
        member = this.members.find(function (member) { return member.id === id; });
        console.log("member:");
        console.log(member);
        return Promise.resolve(member);
        // console.log(this.members.find(member => member.id === id));
        // return this.getMembers(1).then(
        //   members => members.find(member => member.id === id)
        // );
    };
    ProjectService.prototype.getMemberOrder = function () {
        return Promise.resolve(this.memberOrder);
    };
    ProjectService.prototype.httpTest = function () {
        //    this.http.get(this.testUrl, {headers: this.header}).toPromise().then(
        //      response => console.log(response)
        //    );
        this.http.get(this.testUrl).toPromise().then(function (response) { return console.log(response.json()); });
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
var Project = (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;
var Member = (function () {
    function Member() {
    }
    return Member;
}());
exports.Member = Member;
var MemberOrder = (function () {
    function MemberOrder() {
    }
    return MemberOrder;
}());
exports.MemberOrder = MemberOrder;
//# sourceMappingURL=project.service.js.map