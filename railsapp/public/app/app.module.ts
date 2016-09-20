import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule }    from "@angular/http";

import { AppComponent } from "./component/app.component";
import { ProjectComponent } from "./component/project.component";
import { ProjectDetailComponent } from "./component/project-detail.component";
import { GradingComponent } from "./component/grading.component";
import { ResultComponent } from "./component/result.component";

import { ProjectService } from "./service/project.service";

import { routing } from "./app.routing";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations:  [
    AppComponent,
    ProjectComponent,
    ProjectDetailComponent,
    GradingComponent,
    ResultComponent
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
