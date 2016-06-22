import 'zone.js/dist/zone';
import 'reflect-metadata';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function() {bootstrap(AppComponent).then(function() { alert("done"); }); }, 3000);

