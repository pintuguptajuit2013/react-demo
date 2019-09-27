/*      
    Filename - greetMe.js
    Description - Node.js Command Line Program Demo
*/
var greeter = function(name) {
    console.log("Hello, " + name + "!");
}

var userName = null;
if(process.argv.length > 2) {
    userName = process.argv[2];
} else {
    userName = "Guest";
}

greeter(userName);