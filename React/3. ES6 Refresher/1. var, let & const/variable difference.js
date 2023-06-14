// var : can declear multiple times : value change in if/else(), but not in function(scope) & Loop().

// let : declear for 1 time but assing value for multiple time().

// const : 1time declear and assigning ...

// Global Scope
var a = 1;
let b = 2;
const c = 3;


console.log(`Global Scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b ,c);
}

test();

console.log(`Global Scope: `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: ` , a, b, c);
}

console.log(`Global Scope: `, a, b, c);


for (let a = 0; a <10; a ++) {
    console.log(`Loop: `, a);
    a=18;
}


console.log(`Global Scope: `, a, b, c); 