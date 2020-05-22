let mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit:2,
    host:'localhost',
    user:'test_graphapp',
    password:'hunter2',
    database:'graph_test'
});

let graph_nodes;
let graph_edges;

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
    printNodes(){
        console.log("Nodes:")
        for(let node in this.nodes){
            console.log("Node " + node.id + ", " + node.name + ", on floor " + node.floor + " of block " + node.block + ". ");
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
    pool.connect((err)=>{
        if(err){
            throw err;
        }else{
            console.log("Connected!");
        }
    });
}

function closeConn(){
    pool.end((err)=>{
        if(err){
            throw err;
        }else{
            console.log("Connection closed.");
        }
    });
}

function getNodes(){
    pool.query("SELECT * FROM nodes;", (err, result, fields)=>{
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
    pool.query("SELECT * FROM edges;", (err, result, fields)=>{
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
    graph = new Graph(graph_nodes, graph_edges);
    console.log("Created Graph");
}

//connectDB();
getNodes();
getEdges();
closeConn();
let graph = new Graph(graph_nodes, graph_edges);
graph.printEdges();
graph.printNodes();
