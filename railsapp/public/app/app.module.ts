import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./component/app.component";
import { ProjectComponent } from "./component/project.component";
import { ProjectDetailComponent } from "./component/project-detail.component";
import { ProjectService } from "./service/project.service";

import { routing } from "./app.routing";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations:  [
    AppComponent,
    ProjectComponent,
    ProjectDetailComponent
  ],
  providers: [
    ProjectService
  ]
  bootstrap: [ AppComponent ]
})
export class AppModule { }
