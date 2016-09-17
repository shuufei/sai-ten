import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "app/component/app.component.html"
})

export class AppComponent {
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
