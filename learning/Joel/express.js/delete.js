app.delete('/api/courses/:id', (req, res) => {
    //look up the course
    //not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) 
        return res.status(404).send('The course with the given id was not found.');

    //Delete
    const index = courses.indexOf(course); //get the index and store it in a constant
    courses.splice(index, 1);//splice - remove an object from an array (remove 1 object from index in the array)

    //Return the same course
    res.send(course);

});
