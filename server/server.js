const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());

app.post('/createUser', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json(user);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})