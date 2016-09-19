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
var router_1 = require("@angular/router");
var project_service_1 = require("./../service/project.service");
var ProjectComponent = (function () {
    function ProjectComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("oninit zone");
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectComponent.prototype.showProjectDetail = function (project) {
        console.log("hoghoge");
        console.log(this.projects);
        console.log(project);
        var link = ["/project-detail", project.id];
        this.router.navigate(link);
    };
    ProjectComponent.prototype.linkProjectList = function () {
        var link = ["/projects"];
        this.router.navigate(link);
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: "project",
            templateUrl: "app/component/project.component.html"
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map