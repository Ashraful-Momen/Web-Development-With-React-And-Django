// ==========================
// JavaScript Variable Scope & Declaration Note
// ==========================

// ✅ var:
// - Can be declared multiple times.
// - Can be reassigned.
// - Scope is **function-based**, not block-based.
// - Variable inside if/for block affects outer var variable.
// ❌ Avoid using 'var' in modern JavaScript.

var x = 10;
var x = 20; // ✅ Allowed
x = 30;     // ✅ Allowed

// ✅ let:
// - Cannot be declared twice in the same scope.
// - Can be reassigned.
// - Scope is **block-based**.

let y = 10;
// let y = 20; ❌ Error: Identifier 'y' has already been declared
y = 25; // ✅ Allowed

// ✅ const:
// - Cannot be redeclared.
// - Cannot be reassigned.
// - Scope is **block-based**.

const z = 50;
// const z = 60; ❌ Error
// z = 70; ❌ Error

// ==========================
// Scope Explanation
// ==========================

// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log("🌍 Global Scope:", a, b, c); 
// 🌍 Global Scope: 1 2 3

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("🔧 Function Scope:", a, b, c); 
    // 🔧 Function Scope: 4 5 6
}
test();

console.log("🌍 Global Scope after function:", a, b, c); 
// 🌍 Global Scope after function: 1 2 3

if (true) {
    var a = 7; // var leaks outside block
    let b = 8;
    const c = 9;
    console.log("🧱 If Block Scope:", a, b, c); 
    // 🧱 If Block Scope: 7 8 9
}

console.log("🌍 Global Scope after if-block:", a, b, c); 
// 🌍 Global Scope after if-block: 7 2 3 
// (a is updated globally due to `var`)

for (let i = 0; i < 3; i++) {
    console.log("🔁 For Loop Block Scope:", i); 
    // 🔁 For Loop Block Scope: 0
    // 🔁 For Loop Block Scope: 1
    // 🔁 For Loop Block Scope: 2
}
// console.log(i); ❌ Error: i is not defined (block scope)

// Function-scoped example with let
let fun = () => {
    let a = 100;
    console.log("🔐 Inside Arrow Function:", a); 
    // 🔐 Inside Arrow Function: 100
};
fun();
// console.log(a); ❌ Error: a is not defined (block scope)

// ✅ Best Practice:
// Always use `let` and `const` to avoid hoisting and scope bugs.
// Avoid using `var` in modern JavaScript.
