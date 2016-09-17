import { Component } from "@angular/core";

@Component({
  selector: "my-project-detail",
  templateUrl: "app/component/project-detail.component.html"
})

export class ProjectDetailComponent {
  title: string = "saiten";
  accounts: Account[] = [
    { name: "sai1", detail: "sai1 desu.yorosiku" },
    { name: "sai2", detail: "sai2 desu.yorosiku" },
    { name: "sai3", detail: "sai3 desu.yorosiku" }
  ];

}

export class Account {
  name: string;
  detail: string;
}
