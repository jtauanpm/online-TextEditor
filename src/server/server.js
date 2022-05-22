const express = require('express');
const { handle } = require('express/lib/application');
const { title } = require('process');
const pageModel = require('../models/page.model');
const PageModel = require('../models/page.model');

const app = express();
const server = require('http').createServer(app);
const ws = require('socket.io')(server);

var favicon = require('serve-favicon');
app.use(favicon('assets/favicon.ico'));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get('/', (req, res)=> {
    res.render('./home');
})

app.get('/:title', (req, res) => {
    const title = req.params.title;
    console.log(title);
    try{
        PageModel.find({url: title}, (err, item) => {
            if (err){
                return handleError(err);
            }else {
                console.log(item);
                if(item.length == 0){
                    try{
                        PageModel.create({url: title});
                        res.status(201);
                    }catch (error){
                        res.status(500).send(error.message);
                    }
                }
            }
        });
        res.render('./page');
        
        return res.status(200);
    }catch(error){
        return res.status(500).send(error.message);
    }
    });


const port = 3000;
app.listen(port, () => console.log(`online server port ${port}`));