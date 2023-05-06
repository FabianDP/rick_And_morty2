const express = require('express');
const server = express();
const loginRouter=require('./routes/login')
const favRouter=require('./routes/favorites')
const characRouter=require('./routes/characters')
const morgan = require('morgan');

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
    
server.use('/rickandmorty/login', loginRouter);
 server.use('/rickandmorty/fav', favRouter);
 server.use('/rickandmorty/character', characRouter);


module.exports=server;
