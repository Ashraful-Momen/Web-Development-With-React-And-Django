When to Use Different Events

Form Events

submit: Use when you need to validate form data or handle form submission
change: Use for real-time form validation or updating UI as user changes input
input: Use when you need to track every keystroke/change in an input field
focus: Use when you need to know when an element receives focus
blur: Use when you need to know when an element loses focus


Keyboard Events

keydown: Use when you need to detect ALL keys (including special keys like Ctrl, Alt)
keyup: Use when you need to detect when a key is released
keypress: Use when you only need to detect character input (deprecated)


Mouse Events

click: Use for basic click interactions
dblclick: Use for double-click actions
mousedown: Use when you need to know exactly when the mouse button is pressed
mouseup: Use when you need to know when the mouse button is released
mousemove: Use for drag operations or tracking mouse position
mouseenter: Use when you need to know when mouse enters an element (doesn't bubble)
mouseover: Use when you need to know when mouse enters an element (bubbles)
mouseleave: Use when you need to know when mouse leaves an element


Window Events

load: Use when you need to wait for all resources (images, scripts) to load
DOMContentLoaded: Use when you only need the DOM to be ready (faster than load)
resize: Use when you need to respond to window size changes
scroll: Use when you need to track scrolling (e.g., infinite scroll)

===========================================================================
# JavaScript Events Cheatsheet

## Event Types and Usage

### Form Events
```javascript
// Submit Event
form.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent form submission
    const formData = event.target[0].value;  // Get first input value
    const timestamp = event.timeStamp;       // Get submission timestamp
});

// Change Event (for select, input, textarea)
element.addEventListener("change", (event) => {
    const newValue = event.target.value;     // Get changed value
});
```

### Keyboard Events
```javascript
// Key Events
element.addEventListener("keyup", (event) => {
    event.key;      // Get actual character
    event.code;     // Get key code
    event.type;     // Get event type
    event.target.value;  // Get input value
});

// Available Key Events
element.addEventListener("keydown", handler);   // When key is pressed
element.addEventListener("keyup", handler);     // When key is released
element.addEventListener("keypress", handler);  // When key is pressed (character keys only)
```

### Mouse Events
```javascript
// Basic Mouse Events
element.addEventListener("mousedown", handler);  // When mouse button is pressed
element.addEventListener("mouseup", handler);    // When mouse button is released
element.addEventListener("mousemove", handler);  // When mouse is moved
element.addEventListener("mouseenter", handler); // When mouse enters element
element.addEventListener("mouseover", handler);  // When mouse hovers over element

// Mouse Event Properties
event.offsetX;  // X coordinate relative to element
event.offsetY;  // Y coordinate relative to element

// Mouse Event Example with Timing
element.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";
    setTimeout(() => {
        event.target.style.color = "";
    }, 500);
});
```

### Window Events
```javascript
// Load Event
window.addEventListener("load", () => {
    // Execute when page is fully loaded
    document.getElementById("loader").style.display = "none";
});

// Resize Event
window.addEventListener("resize", () => {
    // Execute when window is resized
});

// Scroll Event
window.addEventListener("scroll", () => {
    // Execute when page is scrolled
});
```

### Canvas Drawing Events Example
```javascript
// Initialize Canvas
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Drawing State Variables
let isDrawing = false;
let x = 0;
let y = 0;

// Mouse Event Listeners for Drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
window.addEventListener("mouseup", stopDrawing);

// Drawing Functions
function startDrawing(e) {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
}

function draw(e) {
    if (!isDrawing) return;
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
}

function stopDrawing() {
    isDrawing = false;
}

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}
```

## Event Handling Best Practices

1. **Event Prevention**
```javascript
event.preventDefault();  // Prevent default behavior
event.stopPropagation(); // Stop event bubbling
```

2. **Event Delegation**
```javascript
// Handle events on multiple elements efficiently
parentElement.addEventListener("click", (e) => {
    if (e.target.matches(".child-class")) {
        // Handle event for child elements
    }
});
```

3. **Event Cleanup**
```javascript
// Remove event listeners when no longer needed
element.removeEventListener("event", handler);
```

4. **Event Options**
```javascript
element.addEventListener("event", handler, {
    capture: false,  // Event capturing phase
    once: true,      // Run handler only once
    passive: true    // Improve scrolling performance
});
```

## Common Event Properties
```javascript
event.target           // Element that triggered the event
event.currentTarget    // Element that listener is attached to
event.type            // Type of event (click, submit, etc.)
event.timeStamp       // Time when event occurred
event.preventDefault() // Prevent default behavior
event.stopPropagation() // Stop event bubbling
```
