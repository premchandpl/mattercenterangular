import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html'
})
export class AppComponent { 
    title:string = "Customer App";
    name="ward"
    wardsColor = "blue";
    
    changeSuitColor(){
        this.wardsColor = "red";
    }
}
