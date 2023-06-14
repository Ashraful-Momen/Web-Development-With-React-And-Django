// class : Blue-print of creating object.

class car {
    passenger = 3;
    constructor(color){
        this.color= color;
        this.vihecales = "truck"
    }
    cost = "1000$"
    
}

let obj1 = new car('red');

// console.log(obj1); 



class ship extends car{
    constructor(speedBoat,color){
        super(color); //parent class constructor variable : vihecales
        this.ship = speedBoat;
    }
}

let obj2 = new ship("fastBoat","green");

console.log(obj2);



