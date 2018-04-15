import {Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, Output} from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 85 / 5;
    }
    onClick(): void {
      this.ratingClicked.emit("Star Rating Clicked");
    }

    // ngOnInit(): void {
    //     console.log("Star component is initiliazed");
    // }
}
