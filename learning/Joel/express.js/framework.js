const express = require('express');
const app = express();

//go to expressjs.com
//http methods

//1. get request
//first arguement is the url '/', 
//second is the callback function when there is a http request. 
//definition of a route: define the path or url ('/') and 
//the callback function which is called the route handler
app.get('/', (req, res) => {
    res.send('Hello World');
}); 

//in a real world scenario, we will retrieve the data from the database
app.get('/api/courses', (req, res) => {
    //data from database
    res.send([1,2,3]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));

// app.post(); //create
// app.put(); // update
// app.delete(); //delete
