// Instantiate a new graph
var Graph = function() {
  // no properties needed since using pseudoclassical instantiation
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this[newNode.data] = newNode; // using data value as the key
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this[node]; // coerce to bool
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeEdges = this[node].edges;
  for (var nodePair in nodeEdges) {
    delete this[nodePair].edges[node];
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeEdges = this[fromNode].edges;
  for (var key in fromNodeEdges) {
    if (fromNodeEdges[key] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = toNode; // using node as key and value
  this[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      cb(this[key].data);
    }
  }
};

// creating a node function to build nodes for the graph
// adds GraphNode to the global namespace - risk of collision
var GraphNode = function(data) {
  this.data = data;
  this.edges = {};
};

/*
 * Complexity: What is the time complexity of the above functions?
  Graph.prototype.addNode - O(1) : adds an item to an object
  Graph.prototype.contains - O(1) : check graph for existence of node property
  Graph.prototype.removeNode - O(N) : loop through and delete edges to node in node pairs then delete node
  Graph.prototype.hasEdge - O(N) : loops through edges object
  Graph.prototype.addEdge - O(1)
  Graph.prototype.removeEdge - O(1)
  Graph.prototype.forEachNoce - O(N) : loops through all nodes
 */


