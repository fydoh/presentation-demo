import 'angular2-universal/polyfills';

import { 
    bootstrap, 
    enableProdMode,
    BROWSER_ROUTER_PROVIDERS,
    BROWSER_HTTP_PROVIDERS,
} from 'angular2-universal';

enableProdMode();

import {AppComponent} from './client/app.component';

console.log("bootstrap");

setTimeout(function() {bootstrap(AppComponent, [
  BROWSER_ROUTER_PROVIDERS,
  BROWSER_HTTP_PROVIDERS
]).then(function() {
    console.log("done"); 
}); }, 3000);


