//HOW NODE.JS DIFFERS FROM VANILLA JAVASCRIPT
//1. Node runs on a server not in a browser
//2. The console is the terminal window 
//3. Global object instead of window object
//4. common core modules that we will explore
//5. commonjs modules instead of ES6  
//6. Missing some Js APIs like fetch


console.log("cliff ord");
// const { add,subtract,multiply,divide } = require('./math')

// console.log(add(2, 3))
// console.log(subtract(2, 3))
// console.log(multiply(2, 3))
// console.log(divide(2, 3))

// const os = require('os');
const path = require('path');

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
 
// console.log(__dirname);  It provides the full path to the directory containing the current JavaScript file.
// console.log(__filename);  It provides the full path to the file containing the code where it's used.

//ALTERNATIVE WAY TO GET THE FULL PATH TO THE DIRECTORY
console.log(path.dirname(__filename)); // Outputs the directory name of the current file
console.log(path.basename(__filename)); // Outputs the base name (file name) of the current file
console.log(path.extname(__filename)); // Outputs the extension of the current file
