const express = require('express');

const app = express();
const server = require('http').createServer(app);
const ws = require('socket.io')(server);

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use('/', (req, res)=> {
    res.render('./home');
})

//app.get('/:id')

const port = 8080;
app.listen(port, () => console.log(`online server port ${port}`));