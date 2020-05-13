console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message){
    // send an http request
    console.log(message);
}

module.exports = log;
// module.exports.endPoint = url; // implementation detail, no need for other modules to see this