import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <div>
           <i  
           *ngFor = "let star of ratingStarsCount; let i = index" 
           (mouseover)="changeStar($event,i)" (mouseout)="changeStar($event,i)"
           [ngClass]="star.rated ? 'fa-star star-fill' : 'fa-star-o' "
           class="fa star" style="{...star.style}" aria-hidden="true">
           </i>
    </div>
    `,
    selector: 'app-rating',
    styleUrls: ['./rating.component.css']
})
export class Rating implements OnInit {
     ratingStarsCount = Array(5).fill(0).map((x,i)=>{
        return {
            rated:false
        }
    });

    constructor() {
    }
    ngOnInit(){
    }

    changeStar(event,i){
        if(event.type === 'mouseover'){
            this.ratingStarsCount.map((stars,starindex)=>{
                if(i >= starindex){
                    stars.rated=true;
                }
                else{
                    stars.rated=false;
                }
            })
        }
    }
}