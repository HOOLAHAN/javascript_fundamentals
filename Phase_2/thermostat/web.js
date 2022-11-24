const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat')
const client = new Thermostat();

app.get('/', (request, response) => {
  response.send('Thermostat Challenge!');
});

app.get('/temperature', (request, response) => {
  response.send(getTemperature());
})

app.post('/up', (request, response) => {
  response.send(up());
})

app.post("/down", (request, response) => {
  response.send(down());
});

app.delete("/temperature", (request, response) => {
  response.send(reset());
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);


// curl -XPOST http://localhost:3000/temperature
// curl -XPOST http://localhost:3000/up
// curl -XGET http://localhost:3000/down 

// curl -XDELETE http://localhost:3000/temperature
// curl -XGET http://localhost:3000/temperature 