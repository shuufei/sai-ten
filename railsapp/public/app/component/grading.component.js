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
var project_service_2 = require("./../service/project.service");
var GradingComponent = (function () {
    function GradingComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    GradingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params["id"];
            _this.projectService.getMember(id).then(function (member) { return _this.member = member; });
            //      this.projectService.getMembers(1).then(
            //        members => this.members = members
            //      );
        });
        //    console.log(this.id);
    };
    GradingComponent.prototype.checkMember = function () {
        console.log(this.member);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_service_2.Member)
    ], GradingComponent.prototype, "member", void 0);
    GradingComponent = __decorate([
        core_1.Component({
            selector: "my-grading",
            templateUrl: "app/component/grading.component.html"
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.ActivatedRoute])
    ], GradingComponent);
    return GradingComponent;
}());
exports.GradingComponent = GradingComponent;
//# sourceMappingURL=grading.component.js.map