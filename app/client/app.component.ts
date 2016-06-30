import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/client/app.component.html'
})
export class AppComponent {
    vehicles = [];
    colors: string[] = ['White', 'Silver', 'Black', 'Gray'];
    selectedColor: string = "";
    
    constructor(public http: Http) {

    }

    ngOnInit() {
        this.getVehicles();
    }

    changeColor(color: string) {
        if (color) {
            this.selectedColor = color.toLowerCase();
        }

        this.getVehicles();
    }

    private getVehicles() {
        let url = '/vehicles';
        url += (this.selectedColor) ? '?color=' + this.selectedColor : '';
        this.http
            .get(url)
            .subscribe(res => {
                this.vehicles = res.json();
            });
    }
}
