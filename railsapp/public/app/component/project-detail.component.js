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
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.title = "saiten";
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getMembers(1).then(function (members) { return _this.members = members; });
    };
    ProjectDetailComponent.prototype.showMember = function (member) {
        console.log(member);
        var link = ["/grading", member.id];
        this.router.navigate(link);
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: "my-project-detail",
            templateUrl: "app/component/project-detail.component.html"
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map