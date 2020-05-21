let mysql = require('mysql');

let conn = mysql.createConnection({
    host:'localhost',
    user:'test_graphapp',
    password:'hunter2',
    database:'graph_test'
});

let graph_nodes;
let graph_edges;

let bigass_graph;

class Graph{
    constructor(nodes, edges){
        this.nodes = nodes;
        this.edges = edges;
    }
    shortestPath(start, end){
        return;
    }
    printEdges(){
        console.log("Edges:")
        for(let edge in this.edges){
            console.log("Edge " + edge.id + " starts from " + edge.start + " and ends at " + edge.end + ". ");
        }
    }
}

class Edge{
    constructor(id, start, end, weight, stairs){
        this.id = id;
        this.start = start;
        this.end = end;
        this.weight = weight;
        this.stairs = stairs;
    }
}

class Node{
    constructor(id, floor, block, name){
        this.id = id;
        this.floor = floor;
        this.block = block;
        this.name = name;
    }
}

function connectDB(){
    conn.connect((err)=>{
        if(err){
            throw err;
        }else{
            console.log("Connected!");
        }
    });
}

function closeConn(){
    conn.end((err)=>{
        if(err){
            throw err;
        }else{
            console.log("Connection closed.");
        }
    });
}

function getNodes(){
    conn.query("SELECT * FROM nodes;", (err, result, fields)=>{
        if(err){
            throw err;
        }else{
            console.log("Got results");
            console.log(result);
            let temp = result.values;
            for(let [id, floor, block, name] in temp){
                graph_nodes.add(new Node(id, floor, block, name));
            }
        }
    });
}

function getEdges(){
    conn.query("SELECT * FROM edges;", (err, result, fields)=>{
        if(err){
            throw err;
        }else{
            console.log("Got results");
            console.log(result);
            let temp = result.values;
            for(let [id, start, end, weight, stairs] in temp){
                graph_edges.add(new Edge(id, start, end, weight, stairs));
            }
        }
    });
}

function createGraph(){
    bigass_graph = new Graph(graph_nodes, graph_edges);
    console.log("Created Graph");
}

connectDB();
getNodes();
getEdges();
closeConn();
createGraph();
bigass_graph.printEdges();