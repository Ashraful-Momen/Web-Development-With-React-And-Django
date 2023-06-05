// set : no duplicate element in set->

let set = new Set([1,2,2,3,3,4,5,6]);

console.log(set);

set.add(5,5,5);

console.log(set);

set.delete(6);

console.log(set);

//check element in set:

console.log(set.has(5)); //ture.

//size of set: 

console.log(set.size);

console.log(set.entries());// convert set in iterator ... (key->value)
//iterate of set: 

let setIter = set.entries();
console.log(setIter.next())
console.log(setIter.next())
console.log(setIter.next())
console.log(setIter.next())
console.log(setIter.next())
console.log(setIter.next())


//set is declear upper section:

for(x of set.values()){
    console.log(x, 'those are set element');
}

for(x of set.keys()){
    console.log(x);
}

set = new Set([1,2,2,3,3,4,5,6]);

for(x of set.entries()){
    console.log(x);
}

//get just value : 

for (let [x] of set.entries()){
    console.log(x);
}

//get all value by spread operator:

let iter = [...set.entries()];
let value = [...set.values()];

console.log(iter);
console.log(value);


let key= [...set.keys()];
console.log(key);


set.forEach((values)=>{
    console.log(values);
})
