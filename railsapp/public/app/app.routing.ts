import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./component/app.component";
import { ProjectComponent } from "./component/project.component";
import { ProjectDetailComponent } from "./component/project-detail.component";

const appRoutes: Routes = [
  {
    path: "app",
    component: AppComponent
  },
  {
    path: "projects",
    component: ProjectComponent
  },
  {
    path: "project-detail",
    component: ProjectDetailComponent
  },
  {
    path: "",
    redirectTo: "/app",
    pathMatch: "full"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
