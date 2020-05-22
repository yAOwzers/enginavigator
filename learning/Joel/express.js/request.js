const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'}
];

app.get('/api/courses', (req, res) => {
     res.send(courses);
});

//find is a method available to every array
//pass a function in find, which will be used to find a course that meets a certain criteria
//parseInt is to pass a string into an integar 
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    //By convention, return a conventions of RESTFUL APIs
    if (!course) 
        return res.status(404).send('The course with the given id was not found.');
    
    res.send(course);
});
