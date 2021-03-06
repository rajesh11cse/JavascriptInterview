class GetNode{
	constructor(key){
		this.key = key ? key :null;
		this.parent = null;
		this.children = {};
		this.end = false;
	}

}

class Trie{

	constructor(){
		this.root = new GetNode(null);
	}
	// Add word to trie data structure
	insert(word){
       // root node
       var node = this.root;
       for (let i = 0; i < word.length; i++) {
				// Add key to trie if not exists
				if(!node.children[word[i]]){

					node.children[word[i]] = new GetNode(word[i]);
					node.children[word[i]].parent = node;

				}
				// move to next key
				node = node.children[word[i]];

				// if its a last key of word
				if(i == word.length-1){
					node.end = true;
				}
			}
		}

	// Search word in trie
	search(word){

		var node = this.root;

		for (let i = 0; i < word.length; i++) {
			
			if(node.children[word[i]]){
				node = node.children[word[i]];
			}else{
				return false;
			}

			if(i == word.length-1 && node.end == false){
				return false;
			}
		}
		return true;
	}

	printWords(root, text){
		for (let key in root.children) {
			var rChild = root.children[key];// root child
		  if(rChild.end == true){
			console.log(text+rChild.key);
			return;
		  }else{
			this.printWords(rChild, text+rChild.key)
		  }
		}
	}
}


var trie = new Trie();
trie.insert('there');
trie.insert('their');
trie.insert('answer');
trie.insert('any');
trie.insert('ansible');
trie.insert('bye');
trie.printWords(trie.root, '');

var util = require('util')
// console.log(util.inspect(trie, { showHidden: false, depth: null, colors: true }))

//                        	root
//                     /   		\      \
//                     t   		a    	b
//                     |   		|     	|
//                     h   		n     	y
//                     |   		|  \  	|
//                     e     	s  	y 	e
//                  /  |    /	|
//                  i  r   i	w
//                  |  |   |	|
//                  r  e   b	e
//                         |	|
//                         l	r
//                         |	
//                         e	




// Search a word in trie
var word = trie.search('ther');

// console.log(word?'Exists':'Not Exists!')


module.exports.trie = trie.root


