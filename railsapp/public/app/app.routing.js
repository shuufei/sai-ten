"use strict";
var router_1 = require("@angular/router");
var project_component_1 = require("./component/project.component");
var project_detail_component_1 = require("./component/project-detail.component");
var grading_component_1 = require("./component/grading.component");
var appRoutes = [
    {
        path: "",
        redirectTo: "/projects",
        pathMatch: "full"
    },
    {
        path: "projects",
        component: project_component_1.ProjectComponent
    },
    {
        path: "project-detail",
        component: project_detail_component_1.ProjectDetailComponent
    },
    {
        path: "grading/:id",
        component: grading_component_1.GradingComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map