const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

const log = require('./logger');

log('message');