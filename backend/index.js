const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello mundo');
});

app.listen(3333);