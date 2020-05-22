//id is our parameter - can be any other word
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})

//multiple parameters
//example: service for powering a block
//get all the posts for a given month and year
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
})

//Queries
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.query);
})
