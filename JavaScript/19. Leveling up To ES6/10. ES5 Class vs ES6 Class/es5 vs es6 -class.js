// ES5 : class use as constructor

function person(name,id){
    this.name= "Ashraful";
    this.id = 2028;
}

person.prototype.getName = function (){
    console.log(this.name, this.id);
}
let obj2 = new person("Ashraful", 2028);

obj2.getName();

//---------------ES6:------------------

// class person{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     }
//     getName(){
//         console.log(this.name, this.id);
//     }
// }

// let obj2 = new person("Ashraful", 2028);

// obj2.getName();