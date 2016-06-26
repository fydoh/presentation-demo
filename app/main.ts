import 'zone.js/dist/zone';
import 'reflect-metadata';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function () {
    document.getElementById("environment").innerText = "client"; 
    bootstrap(AppComponent, [HTTP_PROVIDERS]).then(function () { 
        alert("done"); 
    }); 
}, 3000);

