/*Given a string of digits, output all the contiguous substrings of length n in that string.*/
function substringOfLengthN(string,number){
	let result=[];
	for (let i=0; i<(string.length-1)-number;i++){
		result[i]=string.substr(i, number);	
	}
	console.log(result);
}
substringOfLengthN('495215',3)
substringOfLengthN('abcdfghz',7)