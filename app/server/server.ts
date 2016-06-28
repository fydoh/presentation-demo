// Express
import * as path from 'path';
import * as express from 'express';
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// Views
app.set('views', __dirname);

// Route
app.get('/search', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

// serve static files
app.use(express.static(ROOT, { index: false }));


// Vehicles DB :D
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
    },
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
    },    {
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
    },    {
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
    },    {
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
    },
];

// Vehicles Retrieval
app.get('/vehicles', (req, res) => {
    let vehiclesThatMatch = [];

    if (req.query.color) {
        vehicles.forEach((vehicle) => {
            if (vehicle.color === req.query.color) {
                vehiclesThatMatch.push(vehicle);
            }            
        });
    } else {
        vehiclesThatMatch = vehicles;
    }

    let result = createColumnsAndRows(vehiclesThatMatch);

    res.json(result);
});

function createColumnsAndRows(vehiclesThatMatch) {
    let result = [];
    let index = 0;
    let row;
    let columnLength = 4;
    let vehicleCount = vehicles.length;

    for(var i = 0; i < vehicleCount; i++) {
        if (i % columnLength === 0) {
            if (row) {
                result.push(row);
            }
            row = [];
        }
        row.push(vehicles[i]);
    }

    if (row) {
        result.push(row);
    }

    return result;
}


// server
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});