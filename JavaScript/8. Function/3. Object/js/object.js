let person={
    name: "Md.Ashraful",
    lname: "Momen",
    phone: "01674317715",
    getAllName: function(fname,lname){
        console.log(`first name is ${this.name} and Last Name is : ${this.lname}`);
    }
}


console.log(person.name);
console.log(person.getAllName());

//=======================Sir:code==========================
// Object Method 
let person2 = { firstname: "Fazle",
 lastname: "Rahat",
  dob: "9-10-1995", 
  //number, string, date, array, object 
  fullname: function() { return `${this.firstname} ${this.lastname}`; } }
   console.log(person.firstname);
    console.log(person.fullname());
     let str = "Bohubrihi";
      console.log(str.length); 
      console.log(str.split());