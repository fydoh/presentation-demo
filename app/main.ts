// declare module 'zone.js/dist/zone' {
//     export var Zone; // this doesn't actually do anything just makes the compiler not complain about the empty module
// }
// declare module 'zone.js/dist/long-stack-trace-zone' {
//     export var Zone; // this doesn't actually do anything just makes the compiler not complain about the empty module
// }
import 'zone.js/dist/zone';
import 'reflect-metadata';

import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function() {bootstrap(AppComponent).then(function() { alert("done"); }); }, 3000);

