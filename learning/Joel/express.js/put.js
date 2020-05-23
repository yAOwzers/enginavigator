app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) 
        return res.status(404).send('The course with the given id was not found.');

    //Validate
    //If invalid, return 400 - bad request
    //shorten it by using object destructuring in modern javascript
    // const result = validateCourse(req.body);
    const {error} = validateCourse(req.body); //result.error
    
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    //Update course
    //Return the updated course
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema); //validate the course
}
