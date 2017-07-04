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

var ciphertext = CryptoJS.AES.encrypt('PasswordEncryption123$', text);

var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), text);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log('Encrypted Password:'+ciphertext);
console.log('Password encrypted code:'+text);
console.log('Password you entered:'+plaintext);