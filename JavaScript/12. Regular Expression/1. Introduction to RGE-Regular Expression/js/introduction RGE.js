// regular expression or pattern matching : 


// let re = /hello/; //"hello" search as non caseSensetive// /* here '/'string 'hello'-> main word which will be search in other string or this hello string replace or matching with other string  '/' */

// re = /hello/i; // now 'hello' search as non CaseSensetive;

// console.log(re); //print /hello/ with the regular / ***/ 
// console.log(re.source) // just print the regular **** with out '/..../'

//-------------------------------------
// let str = 'Hello Bangla desh';

//     str = ' bangla desh hello and hello bangladesh';
//     str = 'jashelloajsdflkjasldkfj' //if just get hello then also return this in exec();

// //exec() this function return an array if pattern match either return an null . and exec() functin is an object of re example => re.exec(str);

// let matchingWord = re.exec(str); // if match pattern then return the first index number of the word in array. and if match the the pattern just return 1st word in string though exit more word in the string;

// console.log(matchingWord);
//-------------------------------------


//match() -> this function is also an object of string.match() -> it just return an array like exec() , 


// let re = /hello/i;

// let str = 'jasdfj Hello lasjdfljasfj'
//     str = 'jasdfj ello lasjdfljasfj' // return null cz ello != hello;
//     str = ' hello ';

// let matchingWord = str.match(re);

// console.log(matchingWord);
//-------------search()-> function of str.search() and return first matching index or -1-------------------

// let re = /hello/i;

// let str = 'jasdfj Hello lasjdfljasfj'
//     str = 'jasdfj ello lasjdfljasfj' // return null cz ello != hello;
//     str = ' hello ';

// let matchingWord = str.search(re);

// console.log(matchingWord);

// ------------------replace() also object of str.replace() -> return a new string but need to be store in another variable;----------------------------


let re = /hello/i;

let str;
    
    str = ' hello say something ';

let newString = str.replace(re,'Salam,');

console.log(newString);

console.log(re);
console.log(re.source);
console.log(str);