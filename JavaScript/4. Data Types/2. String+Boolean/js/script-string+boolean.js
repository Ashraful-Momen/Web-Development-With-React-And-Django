
    
    //Concatenation "Hello" + "World" var x = "Hello World";
     //Length of String x.length; 
     //It is a property 
     //Indexing "Hello World"[0] "Hello World"[3] x = "Hello World";
      //x[0] x[3] 
      //Immutable x[1] x[1] = "5" x[1]
       // return a new string, doesn't change x 
       //These are methods x.slice(1, 5); 
       //x.slice(-6, -1);
       // x.substr(3, 2); 
       // 2nd parameter means the length x.replace("Hello", "World");
       // x.toUpperCase();
       // x.toLowerCase(); 
       //x.concat("1", "2");
       // x.trim(); // remove 1st and last space of the String;

         //links //https://www.w3schools.com/jsref/jsref_obj_string.asp 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 


    var x = " Hello Bangladesh ";

    var a = x.substring(1,3);

    a= x.trim(); // remove first and last space from string;

    a = x.substring(2, 5); // index 2 to before 5; 

    a = "Hi "; b = "bye" ; 
    var c  = a.concat(b, " Hello "); // 

    
    console.log(c); // output: Hi bye Hello ;

    var d = c.slice(3, 6 ); // slice(start, ending index);

    console.log(d);

    //=================================Boolean:================================================

    //undefine: nothing initialized , 
    //NaN : 10/ "h"; this type of error that is not any number type;
    //Null : x = null or 0;

    // if x = null or 0 then // boolean: false
    // if x = some value then // boolean: true
    //=============================================================================================