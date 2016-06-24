import 'angular2-universal/polyfills';

// Express
import * as path from 'path';
import * as express from 'express';

import {
    provide,
    expressEngine,
    ORIGIN_URL,
    enableProdMode,

    NODE_ROUTER_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    REQUEST_URL,
    BASE_URL
} from 'angular2-universal';

enableProdMode();

import {AppComponent} from "../client/app.Component";

// Express
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

app.engine('html', expressEngine);
app.set('view engine', 'html');

// Express
app.set('views', __dirname);

// Express
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
// });

// Server-side application render (universal)
function ngApp(req, res) {
    console.log("here");

    // server side data
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    // server side data under providers
    // also BASE_URL
    res.render('index', {
        directives: [AppComponent],
        platformProviders: [
            provide(ORIGIN_URL, { useValue: 'http://localhost:3001' }),
            provide(BASE_URL, { useValue: baseUrl })
        ],
        providers: [
            provide(REQUEST_URL, { useValue: url }),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS
        ]
    });
}

// serve static files
app.use(express.static(ROOT, { index: false }));

// server side data
app.get('/cats', (req, res) => {
    res.json({
        data: 'cat data'
    })
});

app.use('/', ngApp);

// server
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
    //console.log('origin_url', ORIGIN_URL);
});