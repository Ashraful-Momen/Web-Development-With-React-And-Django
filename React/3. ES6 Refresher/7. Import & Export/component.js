export let a = 10;

export let arr = [1,2,3,4];

export class car {
    constructor(color,price){
        this.color = color,
        this.price = price
    }

    display(){
        console.log(`The color is ${this.color} and price is ${this.price}`);
    }
}

// export let objCar = new car('green','$5000');
// export let objCar = new car();

export let display = (name) => console.log(`Hello `+name+'!');

let num = [1,2,3,4,5]
export default num ;