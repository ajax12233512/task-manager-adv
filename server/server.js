const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})