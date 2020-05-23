const dbURI = 'localhost';
const dbUsername = 'test_graphapp';
const dbPassword = 'hunter2';
const dbDbName = 'graph_test';

let sql = require('mysql');

class Graph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
    }
    shortestPath(start, end) {
        return;
    }
    printEdges() {
        console.log("Edges:");
        for (let edge of this.edges) {
            console.log("Edge " + edge.id + " starts from " + edge.start + " and ends at " + edge.end + ". ");
        }
    }
    printNodes() {
        console.log("Nodes:");
        for (let node of this.nodes) {
            console.log("Node " + node.id + ", " + node.name + ", on floor " + node.floor + " of block " + node.block + ". ");
        }
    }
}

class Edge {
    constructor(id, start, end, weight, stairs) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.weight = weight;
        this.stairs = stairs;
    }
    printEdge() {
        console.log("Edge " + this.id + " starts from " + this.start + " and ends at " + this.end + ". ");
    }
}

class Node {
    constructor(id, floor, block, name) {
        this.id = id;
        this.floor = floor;
        this.block = block;
        this.name = name;
    }
    printNode() {
        console.log("Node " + this.id + ", " + this.name + ", on floor " + this.floor + " of block " + this.block + ". ");
    }
}

function oopTest() {
    let edge1 = new Edge(1, 1, 2, 5, 0);
    let edge2 = new Edge(2, 2, 1, 3, 0);
    let node1 = new Node(1, '1', 'E1', 'E1-01-01');
    let node2 = new Node(2, '1', 'E1', 'E1-01-02');

    let graph = new Graph([node1, node2], [edge1, edge2]);

    graph.printEdges();
    graph.printNodes();
}

async function populateGraph() {
    try {
        await getNodesFromDB();
        await getEdgesFromDB();
        conn.end((err) => {
            if (err) throw err;
        });
        graph = new Graph(graphNodes, graphEdges);
        graph.printNodes();
        graph.printEdges();
    } catch (e) {
        console.log('ur mum gae ' + e);
    }
    
}

async function getNodesFromDB() {
    return conn.query('SELECT * FROM nodes;', (err, result, fields) => {
        if (err) {
            throw err;
        }
        result.forEach((node) => {
            graphNodes.push(new Node(node.node_id, node.floor, node.block, node.name));
        });
    });
}

async function getEdgesFromDB() {
    return conn.query('SELECT * FROM edges;', (err, result, fields) => {
        if (err) {
            throw err;
        }
        result.forEach((edge) => {
            graphEdges.push(new Edge(edge.edge_id, edge.start, edge.end, edge.weight, edge.stairs));
        });
    });
}

let conn = sql.createConnection({
    host: dbURI,
    user: dbUsername,
    password: dbPassword,
    database: dbDbName
});

let graphNodes = [], graphEdges = [];
let graphNodesResult;
let graphEdgesResult;
let graph;

populateGraph();


