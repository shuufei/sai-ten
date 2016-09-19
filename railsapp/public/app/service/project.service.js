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
var ProjectService = (function () {
    function ProjectService() {
        this.projects = [
            { id: 1, title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
            { id: 2, title: "idea-son", detail: "sai2 desu.yorosiku" },
            { id: 3, title: "hacker", detail: "sai3 desu.yorosiku" }
        ];
        this.members = [
            { id: 1, name: "sai1", detail: "sai1 desu.yorosiku", order: 1 },
            { id: 2, name: "sai2", detail: "sai2 desu.yorosiku", order: 2 },
            { id: 3, name: "sai3", detail: "sai3 desu.yorosiku", order: 3 }
        ];
        this.memberOrder = [
            { id: 1, name: "sai1", order: 1, excitement: 5, possibility: 4, young: 4, total: 13 },
            { id: 2, name: "sai2", order: 2, excitement: 2, possibility: 3, young: 4, total: 9 },
            { id: 3, name: "sai3", order: 3, excitement: 5, possibility: 1, young: 2, total: 8 },
            { id: 4, name: "sai4", order: 4, excitement: 1, possibility: 2, young: 2, total: 5 }
        ];
    }
    ProjectService.prototype.getProjects = function () {
        console.log(this.projects);
        return Promise.resolve(this.projects);
    };
    ProjectService.prototype.getProject = function (id) {
        var project;
        project = this.projects.find(function (project) { return project.id === id; });
        console.log("projcet: ");
        console.log(project);
        return Promise.resolve(project);
    };
    ProjectService.prototype.getMembers = function (projectId) {
        return Promise.resolve(this.members);
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
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
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