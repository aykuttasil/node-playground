var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
// module.exports.endpoint = url; 

/*
Eğer bir obje yerine tek bir fonksiyon export etmek istersek aşağıdaki gibi export ederiz.
module.exports = log;

Bu şekilde export edilen fonksiyonun kullanımı 

var log = require('logger.js')
log('message')

şeklinde olur.

*/

console.log(module);