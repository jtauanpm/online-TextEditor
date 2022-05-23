const express = require('express');
const http = require('http');
const Server = require('socket.io').Server;
const PageModel = require('../models/page.model');

const app = express();

var favicon = require('serve-favicon');
const res = require('express/lib/response');
app.use(favicon('assets/favicon.ico'));
app.set("view engine", "ejs");
app.set("views", "src/views");

const serverHttp = http.createServer(app);
const ws = new Server(serverHttp);

app.get('/', (req, res) => {
    res.render('./home');
})
let page = [];
let id = '';
app.get('/:title', (req, res) => {
    const title = req.params.title;
    try {
        PageModel.find({ url: title }, (err, item) => {
            if (err) {
                return handleError(err);
            } else {
                if (item.length == 0) {
                    try {
                        PageModel.create({ url: title, content: '' });
                        res.status(201);
                    } catch (error) {
                        res.status(500).send(error.message);
                    }
                }
                if(item.length != 0){
                    page = item;
                    id = page[0].id;
                }else{
                    console.log('error')
                }
            }
        });
        res.render('./page');
        return res.status(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

ws.on("connection", socket => {
    console.log(`socket connected: ${socket.id}`);

    if(id !== ""){
        PageModel.findById(id, (err, item) => {
            if (err) {
             console.log(err);
            } else {
                socket.emit('previousText', item.content);
            }
        });
    }

    socket.on('sendText', data => {
        data = data.replace('undefined', '') //FIXME
        PageModel.findByIdAndUpdate(id, { content: data }, (error, att) =>{
            if(error){
                console.log(error);
                res.status(500);
            }else{
                res.status(200);
            }
        });
        socket.broadcast.emit('receivedText', data);
    });
})

const port = 3000;
serverHttp.listen(port, () => console.log(`server is running on port ${port}`));