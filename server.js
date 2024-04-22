let express = require('express');
let app = express();
let port = process.env.port || 3000;
let router = require('./routes/routes');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/places', router);

// app.get('/', (req, res) => {
//     res.render('index.html');
// });

// app.post('/api/place', async (req, res) => {
//     let place = req.body;
//     let result = await postplace(place);
//     client.close();
//     res.json({statusCode: 201, message: 'success', data: result});
// });

// app.get('/api/places', async (req, res) => {
//     let result = await getAllplaces();
//     client.close();
//     res.json({statusCode: 201, message: 'success', data: result});
// });

// async function postplace(place) {
//     await client.connect();
//     let collection = await client.db().collection('places');
//     return collection.insertOne(place);
// }

// async function getAllplaces() {
//     await client.connect();
//     let collection = await client.db().collection('places');
//     return collection.find().toArray();
// }

app.listen(port, () => {
    console.log('server started');
});