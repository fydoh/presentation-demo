import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/client/app.component.html'
})
export class AppComponent {
    vehicles = [];
    selectedColor: string = "";
    
    constructor(public http: Http) {

    }

    ngOnInit() {
        this.getVehicles();
    }

    changeColor() {
        this.getVehicles();
    }

    private getVehicles() {
        let url = '/vehicles';
        url += (this.selectedColor) ? '?color=' + this.selectedColor : '';
        debugger;
        this.http
            .get(url)
            .subscribe(res => {
                this.vehicles = res.json();
            });
    }
}
