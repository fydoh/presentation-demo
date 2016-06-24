import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/client/app.component.html'
})
export class AppComponent {
    name: string = 'David';
    cats: {};

    constructor(public http: Http) { }

    ngOnInit() {
        this.http
            .get('/cats')
            .subscribe(res => {
                this.cats = res.json();
            });
    }

    sayHello() {
        this.name = "Hello from client";
    }
}
