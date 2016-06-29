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
        this.http
            .get('/vehicles')
            .subscribe(res => {
                this.vehicles = res.json();
            });
    }

    sayHello() {
        this.name = "Hello from client";
    }
}
