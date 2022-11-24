const express = require('express');
const app = express();
const port = 3000;
counter = 0;

app.get('/', (request, response) => {
  response.send('Hello, there express!');
});

app.get('/counter', (request, response) => {
  response.send(`${counter}`);
})

app.post('/counter', (request, response) => {
  counter += 1 ;
  response.send();
})

app.delete("/counter", (request, response) => {
  counter = 0;
  response.send();
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);


// curl -XPOST http://localhost:3000/counter
// curl -XPOST http://localhost:3000/counter
// curl -XGET http://localhost:3000/counter 

// curl -XDELETE http://localhost:3000/counter
// curl -XGET http://localhost:3000/counter 