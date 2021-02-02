const fs = require('fs')


// Sync - Blocking
const files = fs.readdirSync('./');
console.log(files);


// Async - Non-Blocking
fs.readdir('$', function (err, files) {
    if (err) console.log(err);
    else console.log(files);
});