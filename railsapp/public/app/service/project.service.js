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
            { title: "wakamonokai1", detail: "sai1 desu.yorosiku" },
            { title: "idea-son", detail: "sai2 desu.yorosiku" },
            { title: "hacker", detail: "sai3 desu.yorosiku" }
        ];
        this.members = [
            { name: "sai1", detail: "sai1 desu.yorosiku" },
            { name: "sai2", detail: "sai2 desu.yorosiku" },
            { name: "sai3", detail: "sai3 desu.yorosiku" }
        ];
    }
    ProjectService.prototype.getProjects = function () {
        console.log(this.projects);
        return Promise.resolve(this.projects);
    };
    ProjectService.prototype.getMembers = function (projectId) {
        return Promise.resolve(this.members);
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
//# sourceMappingURL=project.service.js.map