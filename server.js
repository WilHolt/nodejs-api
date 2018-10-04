'use strict'
const express = require('express');
const http = require('http');
const debug = require('debug');

const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);




const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req,res,next) =>{
  res.status(200).send({
    title:"Node Jiu-Jitsu API",
    version: "0.0.1"
  });
});


server.listen(port);
server.on('error', onError);
console.log("API RODANDO SUAVE NA PORTA"+port);


function normalizePort(){

}

function onError(error){
  if(error.syscall !== 'listen'){
    throw error;
  }

  const bind = typeof port === 'string' ?
  'Pipe' + port : 'Port' + port ;

  switch(error.code){
    case 'EACCES':
    console.error(bind+'Requires elevated privileges');
    process.exit(1);
    case 'EADDRINUSE':
    console.error(bind+'is already in use');
    process.exit(1);
    default: throw error;
  }
}
