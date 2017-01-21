//your server will live here
let connect = require('connect');

//create an instance of the connect server - app
let app = connect();

//create the port constant
const port = 3000;

//start listening
app.listen(port);
console.log(`Server started at http://localhotst:${port}`);

//first route is '/'- root of my website
