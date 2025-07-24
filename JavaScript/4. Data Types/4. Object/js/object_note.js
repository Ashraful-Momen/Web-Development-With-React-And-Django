// 🧠 JavaScript Objects & Nested Access – Complete Cheat Sheet

// ✅ Part 1: Basic Object Operations

var student = { name: "shuvo" };
console.log(student);               // { name: 'shuvo' }

// Add Properties
student.roll = 5385;
student.phone = "01674317715";
console.log(student);               // { name: 'shuvo', roll: 5385, phone: '01674317715' }

// Update Property
student.phone = 1674317715;
console.log(student);               // { name: 'shuvo', roll: 5385, phone: 1674317715 }

// Delete Property
delete student.phone;
console.log(student);               // { name: 'shuvo', roll: 5385 }

// ✅ Accessing Properties
// Dot notation
console.log(student.name);          // 'shuvo'
// Bracket notation
console.log(student["roll"]);        // 5385


// ✅ Part 2: Nested Arrays in Arrays

var array = [
  "1",
  "2",
  [
    array2 = [
      "a",
      "b",
      array3 = ["c", "d"]
    ]
  ],
  3,
  4
];

// Accessing deeply nested values:
console.log(array[2]);              // [Array(3)]
console.log(array[2][0]);           // ["a", "b", Array(2)]
console.log(array[2][0][2][0]);     // 'c'
console.log(array[2][0][2][1]);     // 'd'


// ✅ Part 3: Nested Objects inside Arrays inside Objects

var shuvo = {
  1: "hello",
  2: "bye",
  name: [
    "a",
    "b",
    momen = {
      roll: 123,
      phone: 1122,
      ashraful: [1, 2, 3]
    }
  ]
};

// Access nested structure
console.log(shuvo.name);            // ["a", "b", {...}]
console.log(shuvo.name[2]);         // { roll: 123, phone: 1122, ashraful: [1, 2, 3] }
console.log(shuvo.name[2]["ashraful"][2]); // 3


// ✅ Summary Table
// Operation              | Syntax Example                   | Description
//------------------------|----------------------------------|-----------------------------
// Create object          | var obj = {}                     | Empty object
// Read property          | obj.name / obj["name"]           | Access property
// Add property           | obj.key = value                  | Adds a new key
// Update property        | obj.key = newValue               | Changes existing value
// Delete property        | delete obj.key                   | Removes the key
// Nested object access   | obj.prop.subprop[index]          | Deep access


// ✅ Tips:
// - Always use bracket notation when the key is dynamic or has spaces.
// - Bracket notation is useful for variables: obj[varName]
// - Objects and arrays can be deeply combined.


// 🔗 Reference: https://www.w3schools.com/js/js_objects.asp
