import {Component} from "@angular/core";
import {trigger, style, transition, animate, keyframes, query, stagger, state} from "@angular/animations";

@Component({
   templateUrl: "./welcome.component.html",
   animations: [
     trigger("myTrigger", [
       state("fadeIn", style({
         opacity: "1"
       })),
       transition("void=>*", [
         style({
           opacity: "0", transform: "translateY(20px)"
         }),
         animate("500ms")
     ])
     ]
})
export class WelcomeComponent {
  public pageTitle = "Welcome";
  state = "large";
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
    console.log("Add new SLI");
    this.slis.push(1);
    this.state = "fadeIn";
  }
  removeSli(index: number ) {
    console.log("Remove sli " );
    this.slis.splice(index, 1);
  }
  openSliTab() {
    window.open("/slis", "_blank");
  }
}
