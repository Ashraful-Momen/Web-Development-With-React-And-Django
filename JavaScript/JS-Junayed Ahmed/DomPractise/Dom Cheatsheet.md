# DOM Manipulation Cheatsheet

## Element Selection

### Basic Selectors
```javascript
// Single Element Selection
document.querySelector('#id_name')              // By ID
document.querySelector('.className')            // By class
document.querySelector('tagName')               // By tag
document.getElementById('id_name')              // By ID (older method)

// Multiple Elements Selection
document.querySelectorAll('.className')         // Returns NodeList
document.getElementsByClassName('class_name')    // Returns HTMLCollection
document.getElementsByTagName('tagName')        // Returns HTMLCollection
```

### Advanced Selectors
```javascript
// Custom Attributes
document.querySelectorAll('[data-atr]')                // Select by custom attribute
document.querySelectorAll('[data-atr="value"]')        // Select by attribute value

// Pseudo Selectors
document.querySelectorAll('li:first-child')            // First child
document.querySelectorAll('li:last-child')             // Last child
document.querySelectorAll('li:nth-child(odd)')         // Odd elements
document.querySelectorAll('li:nth-child(even)')        // Even elements
document.querySelectorAll('li:nth-child(2n)')          // Even elements (alternative)
```

## DOM Traversal

### Parent-Child Navigation
```javascript
// Child Navigation
element.childNodes                  // All child nodes (including text nodes)
element.children                    // Only element nodes
element.firstChild                  // First child (including text nodes)
element.firstElementChild           // First element child
element.lastChild                   // Last child (including text nodes)
element.lastElementChild            // Last element child

// Parent Navigation
element.parentNode                  // Parent node
element.parentElement               // Parent element
```

### Sibling Navigation
```javascript
element.previousSibling            // Previous sibling (including text nodes)
element.previousElementSibling     // Previous element sibling
element.nextSibling               // Next sibling (including text nodes)
element.nextElementSibling        // Next element sibling
```

## Element Manipulation

### Creating & Adding Elements
```javascript
// Create
const newElement = document.createElement('tagName')

// Add Content
newElement.textContent = 'text'              // Add text content
newElement.innerHTML = '<p>HTML content</p>' // Add HTML content

// Insert Elements
parent.append(newElement)                    // Add at end
parent.prepend(newElement)                   // Add at beginning
element.insertAdjacentElement('beforebegin', newElement)  // Before element
element.insertAdjacentElement('afterend', newElement)     // After element
element.insertAdjacentElement('afterbegin', newElement)   // First child
element.insertAdjacentElement('beforeend', newElement)    // Last child
```

### Removing Elements
```javascript
element.remove()                             // Remove element
parent.removeChild(child)                    // Remove child element
```

### Classes & Attributes
```javascript
// Classes
element.classList.add('className')           // Add class
element.classList.remove('className')        // Remove class
element.classList.toggle('className')        // Toggle class
element.className = 'newClass'              // Replace all classes

// Attributes
element.setAttribute('attr', 'value')        // Set attribute
element.getAttribute('attr')                 // Get attribute
element.removeAttribute('attr')              // Remove attribute
```

### Styling
```javascript
element.style.backgroundColor = 'red'        // Set single style
element.style.cssText = 'color: blue; background: white'  // Set multiple styles
```

## Converting NodeLists/HTMLCollections
```javascript
// Convert to Array
const array = Array.from(nodeList)           // Modern method
const array = Array.prototype.slice.call(nodeList)  // Legacy method

// Iterate
nodeList.forEach(element => {                // Direct iteration on NodeList
    // do something
})
```

## Best Practices
1. Use `querySelector/querySelectorAll` for modern applications
2. Cache DOM selections in variables to improve performance
3. Use template literals for complex string interpolation
4. Check if elements exist before manipulating them
5. Use classList methods instead of directly manipulating className
6. Consider using dataset for custom data attributes
