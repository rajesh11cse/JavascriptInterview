'use strict';

let BST = require('./create_binary_tree.js');

var arr = [];

print_leaf_path(BST.root);

function print_leaf_path(root) {
	if (root == null) {
		return
	}

	arr.push(root.value)
	
	// if node is leaf node, print its data    
	if (!root.left && !root.right) {
		console.log('Leaf node',  root.value, ', Path ', arr) // print all leaf nodes
		arr.pop();
		return;
	}
		print_leaf_path(root.left);
		print_leaf_path(root.right);
    	arr.pop();
}
//  output
// Leaf node 1 , Path  [ 5, 2, 1 ]
// Leaf node 3 , Path  [ 5, 2, 4, 3 ]
// Leaf node 7 , Path  [ 5, 6, 8, 7 ]
// Leaf node 9 , Path  [ 5, 6, 8, 9 ]