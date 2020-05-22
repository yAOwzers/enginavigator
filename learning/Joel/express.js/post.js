//enables the passing of json objects
//returns a piece of middlewear, call app.use to use that middlewear in the request pipeline
app.use(express.json());

//In this route handler, we need to read the course object that should be in the body of the request
//use this property to create a new course Object, add this course object to our array
app.post('/api/courses', (req,res) => {
    const {error} = validateCourse(req.body); //result.error   
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    
    const course = {
        //we are not using a database, so we are manually creating an id
        //when working with a database, the Id will be assigned by the database
        id: course.length + 1, 
        name: req.body.name //read from the body of teh request (we assume the body has a property caleld name), need to enabled json
    };
    courses.push(course); //push it into our array
    res.send(course); //when we post an object into a server, it should respond with that object in the body of the response
    //the client might need to know the id of the new object
});
