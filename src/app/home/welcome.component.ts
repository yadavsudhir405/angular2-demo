import {Component} from "@angular/core";

@Component({
   templateUrl: "./welcome.component.html"
})
export class WelcomeComponent {
  public pageTitle = "Welcome";
  public slis = [];
  public nodes = [
    {
      name: "North America",
      children: [
        { name: "United States", children: [
          {name: "New York"},
          {name: "California"},
          {name: "Florida"}
        ] },
        { name: "Canada" }
      ]
    },
    {
      name: "South America",
      children: [
        { name: "Argentina", children: [] },
        { name: "Brazil" }
      ]
    },
    {
      name: "Europe",
      children: [
        { name: "England" },
        { name: "Germany" },
        { name: "France" },
        { name: "Italy" },
        { name: "Spain" }
      ]
    }
  ];
  public treeOptions = {
    animateExpand: true,
    scrollOnActivate: true,
  };
  public onNodeSelection(event: any) {
    console.log(JSON.stringify(event.node.data));
  }
  public onNodeDeselection(event: any) {
    console.log("Node Deselectd");
  }
  public addNewSli() {
    this.slis.push(1);
  }
  removeSli(sli: any) {
    console.log(sli);
    this.slis.pop(sli);
  }
}
