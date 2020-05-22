const dbURI = 'localhost';
const dbUsername = 'test_graphapp';
const dbPassword = 'hunter2';
const dbDbName = 'graph_test';

let sql = require('mysql');

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
    printEdge(){
        
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

let edge1 = new Edge(1, 1, 2, 5, 0);
let edge2 = new Edge(2, 1, 3, 3, 0);
let node1 = new Node(1, '1', 'E1', 'E1-01-01');
let node2 = new Node(2, '1', 'E1', 'E1-01-02');

let graph = new Graph([node1, node2], [edge1, edge2]);

graph.printEdges();
graph.printNodes();