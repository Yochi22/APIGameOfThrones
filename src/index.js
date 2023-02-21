const express = require("express");

const PORT = 3030;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => { console.log("server is listenin on port 3030")});