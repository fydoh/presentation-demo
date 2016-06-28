import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/client/app.component.html'
})
export class AppComponent {
    name: string = 'David';
    vehicles = [];
    fieldValue: string = 'testing field value';

    constructor(public http: Http) {

    }

    ngOnInit() {
        
        // setTimeout(function() {
        //     this.http
        //         .get('/vehicles')
        //         .subscribe(res => {
        //             var result = res.json();
        //             this.vehicles.push(...result);
        //         });
        // }, 1000);

        console.log("length", this.vehicles.length);

        if (this.vehicles.length === 0) {
            console.log('about to query vehicles');
            this.http
                .get('/vehicles')
                .subscribe(res => {
                    var result = res.json();
                    this.vehicles.push(...result);
                });

        }

        this.fieldValue = "ngOnInit";
    }

    sayHello() {
        this.name = "Hello from client";
    }
}
