const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

/*var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies*/

const festivals = [
    {
        id: 1,
        name: 'Dev Festival',
        city: 'Eskişehir',
        date: '10/10/2019',
        price: '10',
        cont: '200'
    },
    {
        id:2,
        name: 'Kitap Okuma',
        city: 'İzmir',
        date: '1/12/2018',
        price: '5',
        cont: 'Sınırsız'
    },
    {
        id:3,
        name: 'Sadviç Festivali',
        city: 'İzmir',
        date: '18/10/2018',
        price: '10',
        cont: '150'
    },
    {
        id:4,
        name: 'Kahve Fest',
        city: 'Ankara',
        date: '20/08/2018',
        price: '5',
        cont: '300'
    },
    {  
        id:5,
        name: 'Boya Festivali',
        city: 'Eskişehir',
        date: '30/02/2019',
        price: '15',
        cont: 'Sınırsız'
    }
];

app.get('/', (req,res) =>{
  res.send('Welcome to my server!');  
});

app.get('/api/fests', (req , res) => {

    res.send(festivals);

});

app.post('/api/fests' , (req , res) => {
const festival = {
    id: festivals.length + 1,
    name: req.body.name,
    city: req.body.city,
    date : req.body.date,
    price: req.body.price,
    cont : req.body.cont
};

festivals.push(festival);
res.send(festival);
});


const port = process.env.PORT || 8000;
app.listen(8000 ,() => console.log('Hello'));