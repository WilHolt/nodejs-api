const http = require('http');
const debug = require('debug');
const app = require('../src/app');

const port = process.env.PORT || 3000;
app.set('port', port);


const server = http.createServer(app);



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
