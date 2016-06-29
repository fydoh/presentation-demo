import 'zone.js/dist/zone';
import 'reflect-metadata';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function () {
    bootstrap(AppComponent, [HTTP_PROVIDERS]).then(function () { 
        let environment = document.getElementById("environment"); 
        environment.innerText = "Client";
        environment.setAttribute('class', 'environment environment-client');
    }); 
}, 3000);

