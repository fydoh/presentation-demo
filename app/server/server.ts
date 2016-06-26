
// Express
import * as path from 'path';
import * as express from 'express';

// Express
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// Express
app.set('views', __dirname);

// Express
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

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

// server
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});