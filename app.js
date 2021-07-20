const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h2>Express app app</h2><p>version 1.0</p>')
})

app.get('/products', (req, res) => {
    res.send([
        {
        productID: 1,
        price: 100,
        },
        {
            productID:2,
            price: 100
        }
    ])
})

app.listen(port, () => {
    console.log('server is running')
})
