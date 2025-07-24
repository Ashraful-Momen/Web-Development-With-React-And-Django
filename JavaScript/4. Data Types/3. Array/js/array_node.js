// 🧠 JavaScript Arrays & Strings – Complete Cheat Sheet

// ✅ Part 1: Basic Array Operations

var country = ["Bangladesh", "Japan", "China"];

// Array Length
console.log(country.length);  // 3

// Add to End
country.push("Vutan");              // Adds "Vutan"
country[country.length] = "Canada"; // Same effect
country[4] = "England";             // Direct insert by index

// Remove from End
country.pop();  // Removes last item

// Replace Element
country[0] = "Nepal";  // Replaces first element

// Copy Array (Reference)
var temp = country;
console.log(temp);  // Both point to same array


// ✅ Part 2: Strings & Arrays

// 🔹 split(separator) – String ➝ Array
console.log("Love".split(""));                       // ["L", "o", "v", "e"]
console.log("Love".split());                         // ["Love"]
console.log("Bangladesh is my Country".split(" ")); // ["Bangladesh", "is", "my", "Country"]
console.log("Bangladesh".split("n"));               // ["Ba", "gladesh"]

// 🔹 toString() – Array ➝ String
var arr = ["Hello", "Everyone"];
var result = arr.toString();  // "Hello,Everyone"
console.log(result);

// 🔹 join(separator) – Array ➝ String
var arr2 = ["I", "hope", "you", "are", "well"];
console.log(arr2.join(" "));   // "I hope you are well"
console.log(arr2.join("/"));   // "I/hope/you/are/well"
console.log(arr2.join(""));    // "Ihopeyouarewell"

// 🔄 Full String ↔ Array Flow
var x = "Hello Everyone, How are you?";
var y = x.split(" ");          // ['Hello', 'Everyone,', 'How', 'are', 'you?']
var z = y.toString();          // 'Hello,Everyone,,How,are,you?'
var z2 = y.join(" ");         // 'Hello Everyone, How are you?'
console.log(z);
console.log(z2);


// ✅ Part 3: Array Sorting & Reversing
var countries = ["Nepal", "Japan", "China", "Canada"];
countries.sort();              // ['Canada', 'China', 'Japan', 'Nepal']
countries.reverse();           // ['Nepal', 'Japan', 'China', 'Canada']
console.log(countries);


// ✅ Part 4: Array Methods Summary
// push() - Add to end
// pop() - Remove from end
// unshift() - Add to beginning
// shift() - Remove from beginning
// length - Get array length
// sort() - Sort elements alphabetically
// reverse() - Reverse array order
// split() - String ➝ Array
// join() - Array ➝ String with separator
// toString() - Convert array to comma-separated string


// ✅ Practice Example
var sample = "Bangladesh, China, Finland";
var parts = sample.split(", ");         // ["Bangladesh", "China", "Finland"]
var joined = parts.join(" / ");         // "Bangladesh / China / Finland"
console.log(sample.concat(" | ", joined));
