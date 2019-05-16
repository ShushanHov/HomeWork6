/* 3 Convert a long phrase to its acronym.*/
function convertToAcronym(string){
	let result=string[0];
	for (let i=1;i<string.length;i++){
		if (string[i]==' ') result+=string[i+1]
	}
	result=result.toUpperCase();
	console.log(result);
}
convertToAcronym('Prisoner of War')