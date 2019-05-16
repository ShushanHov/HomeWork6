/*Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.*/
function uniqueIntegersSequence(array){
	let maxElement=Math.max(...array);
	let minElement=Math.min(...array);
	let count=maxElement-minElement+1-(array.length)
	
}
uniqueIntegersSequence([1,2,8,4,3,7,10,11])