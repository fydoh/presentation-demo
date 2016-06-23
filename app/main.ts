// import 'zone.js/dist/zone';
// import 'reflect-metadata';
import 'angular2-universal/polyfills';

//import {bootstrap} from '@angular/platform-browser-dynamic';

import { 
    bootstrap, 
    enableProdMode,
    BROWSER_ROUTER_PROVIDERS,
    BROWSER_HTTP_PROVIDERS,
} from 'angular2-universal';

import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function() {bootstrap(AppComponent, [
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
]).then(function() { alert("done"); }); }, 3000);
