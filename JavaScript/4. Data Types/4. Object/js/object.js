// Object {}: delete object.name, Read/Update/Create=> object.name or obejct["name"]; Access Property => Object.property/key

// console.log : code 

// student ={ name: "shuvo"}
// {name: 'shuvo'}
// student
// {name: 'shuvo'}
// student.roll = 5385
// 5385
// student
// {name: 'shuvo', roll: 5385}
// student.phone = 01674317715
// 250716109
// student
// {name: 'shuvo', roll: 5385, phone: 250716109}
// student.phone = "01674317715";
// '01674317715'
// student
// {name: 'shuvo', roll: 5385, phone: '01674317715'}
// delete student.phone;
// true
// student
// {name: 'shuvo', roll: 5385}
// student.phone = 1674317715;
// 1674317715
// student
// {name: 'shuvo', roll: 5385, phone: 1674317715}

// array nested index accessing: ------------------------------------------------

// array= ["1", "2", [array2[a,b, array3[c,d]]],3,4];

// array= ["1", "2", [array2=[a,b, array3=[c,d]]],3,4];

// array= ["1", "2", [array2=["a","b", array3=["c","d"]]],3,4];
// (5) ['1', '2', Array(1), 3, 4]0: "1"1: "2"2: [Array(3)]3: 34: 4length: 5[[Prototype]]: Array(0)
// array
// (5) ['1', '2', Array(1), 3, 4]0: "1"1: "2"2: Array(1)0: Array(3)0: "a"1: "b"2: Array(2)0: "c"1: "d"length: 2[[Prototype]]: Array(0)length: 3[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object3: 34: 4length: 5[[Prototype]]: Array(0)
// array[2]
// [Array(3)]0: Array(3)0: "a"1: "b"2: (2) ['c', 'd']length: 3[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)
// array[2][0]
// (3) ['a', 'b', Array(2)]0: "a"1: "b"2: Array(2)0: "c"1: "d"length: 2[[Prototype]]: Array(0)length: 3[[Prototype]]: Array(0)
// array[2][0][2][1]
// 'd'
// array[2][0][2][0]
// 'c'


// object nested index accessing:  console.log code: ------------------------------------------------

// shuvo = {1, 2 , name=[a,b, momen={roll:123, phone:1122, ashraful=[1,2,3]}]};

// shuvo = {1, 2 , name=["a","b", momen={roll:123, phone:1122, ashraful=[1,2,3]}]};

// shuvo = {1, 2 , name:["a","b", momen={roll:123, phone:1122, ashraful:[1,2,3]}]};

// shuvo = {1:"hello", 2:"bye" , name:["a","b", momen={roll:123, phone:1122, ashraful:[1,2,3]}]};
// {1: 'hello', 2: 'bye', name: Array(3)}
// shuvo.name
// (3) ['a', 'b', {…}]0: "a"1: "b"2: ashraful: Array(3)0: 11: 22: 3length: 3[[Prototype]]: Array(0)phone: 1122roll: 123[[Prototype]]: Objectlength: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// shuvo.name[2]["ashraful"][2]
// 3
