//your server will live here
let connect = require('connect');

//create an instance of the connect server - app
let app = connect();

//create the port constant
const port = 3000;

//start listening
app.listen(port);
console.log(`Server started at http://localhotst:${port}`);

//Route for hello
app.use('/hello', (req,res,next)=> {
res.setHeader('Content-Type', 'text/plain');
res.end("Hello world!");
});

//first route is '/'- root of my website
app.use('/', (req,res,next)=> {
res.setHeader('Content-Type', 'text/plain');
res.end("Welcome!");
});