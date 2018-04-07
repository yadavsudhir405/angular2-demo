import { Component, OnChanges, SimpleChanges, OnInit } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges, OnInit {

    rating = 4;
    starWidth: number;

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 85/ 5;
    }

    ngOnInit(): void {
        console.log("Star component is initiliazed");
    }
}
