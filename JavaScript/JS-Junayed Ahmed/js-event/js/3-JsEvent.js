//inline event , internal event , external event




// -----------------OnSubmit event---------------------------------------
// const form = document.getElementById("form");
// const log = document.getElementById("log");
// const form_input = document.getElementById("form_input");
// form.addEventListener("submit", logSubmit);

// function logSubmit(event) {

//     console.log(event)

//     // log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
//     //both line is same: --------------------------------------------------
//     // console.log(form_input.value);
//     log.textContent = `Form Submitted! : ${event.target[0].value}`;
//     //both line is same: --------------------------------------------------
//     event.preventDefault();
//   }


// ------------------OnChange event--------------------------------------
// const selectElement = document.querySelector(".ice-cream");
// const result = document.querySelector(".result");

// selectElement.addEventListener("change", (event) => {
//     result.textContent = `You like ${event.target.value}`;
// });

// ------------------keyUp,KeyDown,keypress event--------------------------------------
// const input = document.querySelector("#keyId");
// const log = document.getElementById("logKey");

// input.addEventListener("keyup", logKey);

// function logKey(e) {
    //     // console.log(e)
//     // console.log(e.key)
//     // console.log(e.type);
//     // console.log(e.target.value);


// //   log.textContent += ` ${e.code}`;
//   log.textContent += ` ${e.key}`;
// }



// ------------------mousemove,mouseover event--------------------------------------

let isDrawing = false;
let isErasing = false; // Add a flag for erasing mode
let x = 0;
let y = 0;
let drawColor = "#00ff00"; // Default drawing color

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = isErasing ? "white" : drawColor; // Use white color for erasing
  context.lineWidth = isErasing ? 10 : 1; // Use a larger line width for erasing
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

// Add an event listener for the eraser button
document.getElementById("eraserButton").addEventListener("click", () => {
  isErasing = !isErasing; // Toggle erasing mode
  if (isErasing) {
    console.log("Eraser is on");
  } else {
    console.log("Eraser is off");
  }
});

// Add an event listener for the color picker
document.getElementById("colorPicker").addEventListener("input", (e) => {
  drawColor = e.target.value; // Update the drawing color
  if (!isErasing) {
    console.log("Drawing color changed to", drawColor);
  }
});

//------------------------------------------ Mouse Over -------------------------------------
// const test = document.getElementById("test");

// // This handler will be executed only once when the cursor
// // moves over the unordered list
// test.addEventListener(
//   "mouseenter",
//   (event) => {
//     // highlight the mouseenter target
//     event.target.style.color = "purple";

//     // reset the color after a short delay
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false,
// );

// // This handler will be executed every time the cursor
// // is moved over a different list item
// test.addEventListener(
//   "mouseover",
//   (event) => {
//     // highlight the mouseover target
//     event.target.style.color = "orange";

//     // reset the color after a short delay
//     setTimeout(() => {
//       event.target.style.color = "";
//     }, 500);
//   },
//   false,
// );

