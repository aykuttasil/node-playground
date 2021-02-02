const logger = require('./logger');

console.log(logger);

function hello(name) {
	logger.log("Hello " + name);
}

// hello('Aykut');


var username = "aykuttasil";
logger.log(username);



logger.log(global);


// Node modüler sistem olduğu için bu dosya içerisinde tanımlanan her şey sadece bu dosyadan erişebilir. Yani scope u bu dosya olur.
// Oluşturulan değişkenler vs. global değişkenine eklenmez.

// Browser üzerinde çalışan runtime da normalde window değişkeni vardır. Ve eklenen her yeni değişken aslında window objesine eklenmiş olur.


logger.log(module);

// Node'da her dosya bir modülü ifade eder.