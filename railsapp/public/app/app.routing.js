"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./component/app.component");
var project_component_1 = require("./component/project.component");
var project_detail_component_1 = require("./component/project-detail.component");
var appRoutes = [
    {
        path: "app",
        component: app_component_1.AppComponent
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
        path: "",
        redirectTo: "/app",
        pathMatch: "full"
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map