let mysql = require('mysql')

let conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'hunter2'
})

conn.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("Connected!")
    }
})

