function stringChop(str, size) {
  // your code here
	if (str === null  ) {
       return [];
  }

  const result = [];   
  let i = 0;

  while (i < str.length) {   
    result.push(str.slice(i, i + size-1));  
    i += size;
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
