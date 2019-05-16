/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.*/
function largestProduct(array){
	let maxProduct=-Infinity;
	for (let i=0;i<array.length-2;i++){
		if (array[i]*array[i+1]>maxProduct) maxProduct=array[i]*array[i+1];
	}
	console.log(maxProduct);
}

largestProduct([1,2,10,-25,45,1,58])