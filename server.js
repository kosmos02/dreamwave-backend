const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const PORT = 4000;

app.use(cors());

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() );

const knex = require('knex');
const config = require('./knexfile')['development'];
const database = knex(config);

app.listen(PORT, () => console.log('Listening on port 4000'))

app.get('/dreams', (_, response) => {
    database('dreams')
        .then(dreams => response.json(dreams))
})

app.get('/dreams/:id', (request, response) => {
    database('dreams')
        .where({ id: request.params.id})
        .then(dream => response.json(dream[0]));
})

app.post('/dreams', (request, response) => {
    database('dreams')
        .insert({ 
            date: request.body.date, 
            lucid: request.body.lucid, 
            type: request.body.type, 
            tagsarray: request.body.tagsarray, 
            details: request.body.details
        })
        .then(dream => response.json(dream[0]))
})

app.delete('/dreams/:id', (request, response) => {
    database('dreams')
        .where({ id: request.params.id})
        .del()
        .then(dream => response.json[0])
})

// const candies = [
//     {id: 1, name: 'Skittles'},
//     {id: 2, name: 'Starburst'},
//     {id: 3, name: 'Reeses'}
// ]

// app.get('/', (_, response, next) => {
//     response.send({ message: "hooray!"})
// })

// app.get('/candies', (_, response, next) => {
//     response.json(candies)
// })

// app.get('/candies/:id', (request, response) => {

//     const candy =
//         candies.find(candy => candy.id === +request.params.id)
//     response.json(candy)
// })

// app.post('/candies', (request, response) => {
//     const candy = {id: 4, name: request.body.name}
//     candies.push(candy)
//     response.json(candy)
// })

