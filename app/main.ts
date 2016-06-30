import 'angular2-universal/polyfills';

// import 'zone.js/dist/zone';
// import 'reflect-metadata';
// import { bootstrap } from '@angular/platform-browser-dynamic';
// import {HTTP_PROVIDERS} from '@angular/http';

import {
    bootstrap,
    BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function () {
    bootstrap(AppComponent, [BROWSER_HTTP_PROVIDERS]).then(function () { 
        let environment = document.getElementById("environment"); 
        environment.innerText = "Client";
        environment.setAttribute('class', 'environment environment-client');
    }); 
}, 3000);

