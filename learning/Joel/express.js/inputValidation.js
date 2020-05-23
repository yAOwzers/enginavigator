//JS uses First letter upcase to signify a class
//joi returns a class
//modules placed on top dependent on joi and express
const Joi = require('joi');

//In this route handler, we need to read the course object that should be in the body of the request
//use this property to create a new course Object, add this course object to our array
app.post('/api/courses', (req,res) => {
    //a schema defines the shape, definition of the course object
    const schema = {
        name: Joi.string().min(3).required() //string of minimum 3 characters
    };

    const result = Joi.validate(req.body, schema); //returns an object

    //we should'nt always trust every request sent by the user
    if(result.error) { 
        // 400 bad request
        res.status(400).send(result.error.details[0].message); //make it more specific for the user
        //you can differentiate the error messages (name mus tbe written properly)
        return;
    }
    
    const course = {
        //we are not using a database, so we are manually creating an id
        //when working with a database, the Id will be assigned by the database
        id: courses.length + 1, 
        name: req.body.name //read from the body of teh request (we assume the body has a property caleld name), need to enabled json
    };
    courses.push(course); //push it into our array
    res.send(course); //when we post an object into a server, it should respond with that object in the body of the response
    //the client might need to know the id of the new object
});
