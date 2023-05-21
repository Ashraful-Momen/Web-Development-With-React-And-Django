var number = parseInt(prompt("Enter your Number : "));

var sum = 0;



var series="";

for (i = 1; i <= number; i++) {

    sum += i**2;
     series += (i**2).toString();
    if(i == number){
        continue;
    }
    series = series + " + ";
    
    
}

console.log(` ${series} = ${sum}`);

//===================solve : -----------------------

// var n = parseInt(prompt("Enter the number of terms: "));
// var sum = 0; var series = "";
// for (var i = 1; i <= n; i++) {
//     sum += i ** 2;
//     series += (i ** 2).toString();
//     if (i == n)
//      { continue; }
//     series += " + ";
// }
// console.log(`${series} = ${sum}`);