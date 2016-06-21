import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/client/app.component.html'
})
export class AppComponent {
    name: string = 'David';

    sayHello() {
        this.name = "Hello from client";
    }
}
