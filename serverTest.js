const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

let numClicks = 0;

app.get('/test', (req, res, next) => {
    console.log(`Received request: ${req}`);
    numClicks++;
    res.json({data: `This button has been clicked ${numClicks} times!`});
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})