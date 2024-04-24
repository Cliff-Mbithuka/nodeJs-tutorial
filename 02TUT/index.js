// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
console.log(data);
    }catch (err) {
    console.error(err);
    }
}

fileOps();
//READING FILES 
// fs.readFile('./files/starter.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString()); //Add toString() to convert buffer 'data' to a string 
// })

//ALTERNATIVELY
// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data); 
// })

//ALTERNATIVE 2 ( This ensures that the path is constructed correctly regardless of the operating system's file path conventions.)
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString()); //Add toString() to convert buffer 'data' to a string 
// })

// console.log('heloo') //Node is asynchronous will read this first then the file 

//WRITING FILES
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to Meet you', (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//         });
//     });
// });


// APPENDING FILES(Adding Data to the end of a file without overwriting its contents)
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing files', (err) => {
//     if (err) throw err;
//     console.log('Append complete'); 
// })


//Exit on UnCaught errror
process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
})

