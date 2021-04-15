const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const PORT = 4000;

app.use(cors());

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() );

const candies = [
    {id: 1, name: 'Skittles'},
    {id: 2, name: 'Starburst'},
    {id: 3, name: 'Reeses'}
]

app.get('/', (_, response, next) => {
    response.send({ message: "hooray!"})
})

app.get('/candies', (_, response, next) => {
    response.json(candies)
})

app.get('/candies/:id', (request, response) => {

    const candy =
        candies.find(candy => candy.id === +request.params.id)
    response.json(candy)
})

app.post('/candies', (request, response) => {
    const candy = {id: 4, name: request.body.name}
    candies.push(candy)
    response.json(candy)
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
})