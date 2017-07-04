/**
 * Created by LENEVO on 5/18/2017.
 */
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");

var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var text = '';
for(var i=0; i < 12; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
}

var ciphertext = CryptoJS.AES.encrypt('surendra123', text);

var bytes = CryptoJS.AES.decrypt('U2FsdGVkX19eZ1qXyNf9U3SztP4tOvMIZ5qBWe9ArHA=', 'zYg8cysvGhNJ');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log('Password in DataBase:'+ciphertext);
console.log('Salt:'+text);
console.log('Password you entered:'+plaintext);