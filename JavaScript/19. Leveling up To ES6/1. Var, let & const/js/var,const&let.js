// var : can declare multiple times : value change in if/else(), loop() but not in function(scope).
// let : declare for 1 time but assign value for multiple time().
// const : 1time declare and assigning ...

// Global Scope - These variables are accessible throughout the entire program
var a = 1;      // Global var declaration - function scoped, can be redeclared
let b = 2;      // Global let declaration - block scoped, cannot be redeclared
const c = 3;    // Global const declaration - block scoped, cannot be redeclared or reassigned
console.log(`Global Scope: `, a, b, c);  // Output: Global Scope: 1 2 3

// Function creates its own scope - variables declared inside are not accessible outside
function test() {
    var a = 4;      // New var 'a' in function scope - shadows global 'a'
    let b = 5;      // New let 'b' in function scope - shadows global 'b'
    const c = 6;    // New const 'c' in function scope - shadows global 'c'
    console.log(`Functions Scope: `, a, b ,c);  // Output: Functions Scope: 4 5 6
}
test();  // Call the function - displays function-scoped values
console.log(`Global Scope: `, a, b, c);  // Output: Global Scope: 1 2 3 (global values unchanged)

// Block scope demonstration with if statement
if (true) {
    var a = 7;      // var is NOT block scoped - this reassigns the global 'a'
    let b = 8;      // let IS block scoped - creates new 'b' only within this block
    const c = 9;    // const IS block scoped - creates new 'c' only within this block
    console.log(`If Scope: ` , a, b, c);  // Output: If Scope: 7 8 9
}
console.log(`Global Scope: `, a, b, c);  // Output: Global Scope: 7 2 3 (notice 'a' changed to 7!)

// Loop scope demonstration
for (let a = 0; a < 10; a ++) {  // let 'a' is block scoped to the loop
    console.log(`Loop: `, a);    // Output: Loop: 0, Loop: 1, ... Loop: 9
}
console.log(`Global Scope: `, a, b, c);  // Output: Global Scope: 7 2 3 (global 'a' unchanged by loop)

/* Key Takeaways:
 * 1. var: Function scoped - can leak out of blocks (if/for) but not functions
 * 2. let: Block scoped - contained within {}, can be reassigned but not redeclared
 * 3. const: Block scoped - contained within {}, cannot be reassigned or redeclared
 * 4. Function scope creates a completely separate environment
 * 5. Block scope (if/for) only affects let and const, not var
 */
