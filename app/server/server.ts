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

import { AppComponent } from '../client/app.component';
enableProdMode();

// Express
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// Express
app.engine('html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
    console.log("here");

    // server side data
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    // server side data undre providers
    // also BASE_URL
    res.render('index', {
        directives: [AppComponent],
        platformProviders: [
            provide(ORIGIN_URL, { useValue: 'http://localhost:3001' }),
            provide(BASE_URL, {useValue: baseUrl})
        ],
        providers: [
            provide(REQUEST_URL, {useValue: url}),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS
        ],
        async: true,
        preboot: {
          appRoot: 'my-app', // we need to manually include the root

          start:    true,
          freeze:   'spinner',     // show spinner w button click & freeze page
          replay:   'rerender',    // rerender replay strategy
          buffer:   true,          // client app will write to hidden div until bootstrap complete
          debug:    false,
          uglify:   true,
          presets:  ['keyPress', 'buttonPress', 'focus']
        }
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

var vehicles = [
    {
        title: '2011 Toyota RAV4',
        subTitle: 'Limited',
        mileage: 47413,
        imageUrl: 'https://az653359.vo.msecnd.net/2000005009/post-large/2000005009-edc-02-search.jpg?v=%20+%202016.6.26_17.59.15',
        price: 16500,
        color: 'white',
        kelleyBlueBookPrice: 18161
    },
    {
        title: '2012 Other Vehicle',
        subTitle: 'SL1',
        mileage: 47413,
        imageUrl: 'https://az653359.vo.msecnd.net/2000005009/post-large/2000005009-edc-02-search.jpg?v=%20+%202016.6.26_17.59.15',
        price: 16500,
        color: 'white',
        kelleyBlueBookPrice: 18161
    },
    {
        title: '2012 Yet Other Vehicle',
        subTitle: 'SL1',
        mileage: 47413,
        imageUrl: 'https://az653359.vo.msecnd.net/2000005009/post-large/2000005009-edc-02-search.jpg?v=%20+%202016.6.26_17.59.15',
        price: 16500,
        color: 'black',
        kelleyBlueBookPrice: 18161
    }
];

app.get('/vehicles', (req, res) => {
    let result = [];
    console.log(req.query.color);

    if (req.query.color) {
        vehicles.forEach((vehicle) => {
            if (vehicle.color === req.query.color) {
                result.push(vehicle);
            }            
        });
    } else {
      result = vehicles;  
    }

    res.json(result);
});

app.use('/test', ngApp);

// server
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});