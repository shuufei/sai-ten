import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./component/app.component";
import { ProjectComponent } from "./component/project.component";
import { ProjectDetailComponent } from "./component/project-detail.component";
import { GradingComponent } from "./component/grading.component";
import { ResultComponent } from "./component/result.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/projects",
    pathMatch: "full"
  },
  {
    path: "projects",
    component: ProjectComponent
  },
  {
    path: "project-detail/:id",
    component: ProjectDetailComponent
  },
  {
    path: "grading/:project_id/:member_id",
    component: GradingComponent
  },
  {
    path: "result/:id",
    component: ResultComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);