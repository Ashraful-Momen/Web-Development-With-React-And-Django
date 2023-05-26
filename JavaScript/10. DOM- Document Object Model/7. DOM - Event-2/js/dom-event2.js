// document.getElementById('one').addEventListener('click',massage); //don't use here function bracket (), and this function pass a default parameter

// function massage(defaultParameter){

//     // alert('button clicked');

//     let e = defaultParameter;
//     var  val = e.target; // "this" keyword as same as e.target -> call those element which element i clicked.
//          val = e.target.id; // see the id of the clicked element
//          val = e.timeStamp; // after loading page when click the element , it show the time as mini second;
//          val = e.type; // show the type of event like => click/dblclick

//          val = e.clientX // show the distance as px when click according to window (total x axis)
//          val = e.clientY // show the distance as Y axis according to windwo size of px;
//          val = e.offsetX; // show the size of insize element according to X axis
//          val = e.offsetY; // show the size of insize element according to Y axis
         
//          console.log(val);

    
// }

// task : show the container ass different color when mousemove , --------------------------------------------- ; 

// mousemove = 'give the runnig value when mouse move'
// mouseover = 'one time value provide when mouse put on the element ';

// let colorChange = document.querySelector('.container').addEventListener('mousemove',color);

// // console.log(colorChange);

// function color(e){
    
//     let val = this;
    

//     this.style.background = `#${e.offsetX}`;
//     this.style.background = `#${e.offsetY}`;

//     console.log(val);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
// }

//tast: 2 => form input field color change: -------------------------------------------------;


let val = document.querySelector('#name');
val.addEventListener('focus',inputColor);

// console.log(val);

function inputColor(e){
    val = e.target;

    this.style.background= "pink"; // when click the input color then change the color: 
    e.target.style.background = 'green';

    console.log(val);
}
//task 3 : which type input field those all are print in console.log ------------------------

let keyscan = document.querySelector('#name').addEventListener('keyup',task2);

function task2(e){
    // console.log(this.value); //back the keyboard stroke....
    val = document.querySelector('p'); //select the p tag first 
    // val.innerHTML= this.value; // then show the value on p tag;
    val.innerHTML=e.target.value; // e.target.value == this.value;
}

//