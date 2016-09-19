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
var router_2 = require("@angular/router");
var project_service_1 = require("./../service/project.service");
var ResultComponent = (function () {
    function ResultComponent(projectService, router, route) {
        this.projectService = projectService;
        this.router = router;
        this.route = route;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params["id"];
            _this.projectService.getProject(id).then(function (project) { return _this.project = project; });
        });
        this.projectService.getMembers(1).then(function (members) { return _this.members = members; });
        this.projectService.getMemberOrder().then(function (memberOrder) { return _this.memberOrder = memberOrder; });
    };
    ResultComponent.prototype.linkProjectList = function () {
        var link = ["/projects"];
        this.router.navigate(link);
    };
    ResultComponent.prototype.linkProject = function (id) {
        var link = ["/project-detail", id];
        console.log(id);
        this.router.navigate(link);
    };
    ResultComponent.prototype.linkResult = function () {
        var link = ["/result", this.project.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_service_1.Project)
    ], ResultComponent.prototype, "project", void 0);
    ResultComponent = __decorate([
        core_1.Component({
            selector: "my-result",
            templateUrl: "app/component/result.component.html"
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_2.Router, router_1.ActivatedRoute])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map