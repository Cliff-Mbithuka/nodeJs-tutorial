const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware_work/logEvents');
const errorHandler = require('./middleware_work/errorHandler');
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger);

//cross origin resource sharing
const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corseOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionSuccessStatus: 200
}
app.use(cors(corseOptions));

//built-in middleware to handle urlencoded data
//in other words, form data;
//'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname});
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

//redirecting old page to a new page
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html');
});

//Route Handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('Attempted to load hello.html');
    next()
}, (req, res) => {
    res.send('Hello World');
})

//chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res, next) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if (req.accepts('json')){
        res.json({error: "404 Not Found"});
    }else{
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);


app.listen(PORT, () => console.log(`server running on port ${PORT}`));