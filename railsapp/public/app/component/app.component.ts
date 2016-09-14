import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons">add</i>
    </button>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--5-col">4</div>
      <div class="mdl-cell mdl-cell--5-col">4</div>
      <div class="mdl-cell mdl-cell--2-col">4</div>
    </div>
  `
})

export class AppComponent {
  title: string = "sai-ten";
}
