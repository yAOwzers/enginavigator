//we are changing 3000 - arbitary parameter. 
//PORT is dynamically assigned in a hosting environment
//Environment Variable called PORT
//Env Var that is part of the environment in which a process runs, value set outside the applcaiton
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
