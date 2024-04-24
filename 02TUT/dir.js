const fs = require('fs');

//If directiory does not exist create one
if (!fs.existsSync('./new')){
fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory Created')
});
};

//if Directory exists remove it 
if (fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Removed')
    });
    };