const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(cors());

app.use(routes)

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});