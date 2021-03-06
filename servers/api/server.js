const express = require('express');
const path = require('path');
const app = express();

app.get('/trading-floor/develop/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../gui/trading-floor/dist/trading-floor')});
});

app.use(express.static(path.join(__dirname, '../gui/trading-floor/dist/trading-floor')));

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});
