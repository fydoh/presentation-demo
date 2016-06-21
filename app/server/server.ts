
// Express
import * as path from 'path';
import * as express from 'express';

// Express
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// Express
// Engine points to Universal 
app.set('views', __dirname);

// Express
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

// serve static files
app.use(express.static(ROOT, { index: false }));

// This allows me to render without using universal
//app.use(express.static(__dirname + '/'));

// server side data
app.get('/cats', (req, res) => {
    res.json({
        data: 'cat data'
    })
});

// server
app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});