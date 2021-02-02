// convention olarak eğer bir sınıf import ediliyorsa ilk harf büyük yazılır.
const Logger = require('./logger');
const logger = new Logger();

// register a listener
/*
logger.on('messageLogged', function (arg) {
    console.log('Listener called.', arg);
});
*/

// ES6
logger.on('messageLogged', (arg) => {
    console.log('Listener called.', arg);
});

// Raise an event
logger.log('message');