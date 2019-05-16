/*Create a function that builds a tree like object given an array with object which contains parent and id properties.
*/
function findingMainRoot(treeNodest){
	for (let i=0;i<treeNodest.length;i++){
		if(treeNodest[i].parent===null){
			var tree={};
			tree[treeNodest[i].id]={};
			treeNodest.splice(i,1);
			bildingTree(treeNodest,tree);
			break;
		}
	}
	console.log (tree);
}

function bildingTree(treeNodest,tree){
	for (let i=0;i<treeNodest.length;i++ ){
		for (let key in tree){
			if (treeNodest[i].parent==key){
				tree[key][treeNodest[i].id]={};
				return tree;
			}
			else {
				tree
			}
		}
	}
}
var treeNodest=[
	{parent: null,id:0},
	{parent:0, id:1},
	{parent:0, id:2},
	{parent:1, id:3},
	{parent:1, id:4},
	{parent:2, id:5},
	{parent:4, id:6}
];
let a=findingMainRoot(treeNodest);