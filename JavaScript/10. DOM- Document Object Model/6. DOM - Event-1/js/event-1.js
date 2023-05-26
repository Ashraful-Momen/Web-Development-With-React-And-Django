
//***onclick/onfunction used in html tag  if use event function in direct js code don't need to write 'on+event-function'*/

//event function list in w3school: https://www.w3schools.com/jsref/dom_obj_event.asp

//onmouseover : mouse touch on btn=>
// function massage(){
//     alert('Mouse Hover active');
    
// }

document.getElementById('sample').addEventListener('click',show); // don't use function baracket(), then autometically function class with out click;
console.log('Hello');
function show (){
    alert('btn clicked ');
    console.log('working')
    
    
}

//chatGpt: mobile menu and Desktop menu: ------------------------------------------

// function loadNavigationMenu() {
//     if (window.innerWidth <= 760) {
//       // Load mobile menu
//       var mobileMenu = document.createElement('div');
//       mobileMenu.className = 'mobile-menu';
//       // Add your mobile menu HTML structure using Bootstrap 5 classes
      
//       // Append the mobile menu to the document body
//       document.body.appendChild(mobileMenu);
//     } else {
//       // Load desktop menu
//       var desktopMenu = document.createElement('div');
//       desktopMenu.className = 'desktop-menu';
//       // Add your desktop menu HTML structure using Bootstrap 5 classes
      
//       // Append the desktop menu to the document body
//       document.body.appendChild(desktopMenu);
//     }
//   }
  
//   // Call the function on page load
//   window.addEventListener('load', loadNavigationMenu);
  
//   // Call the function on window resize
//   window.addEventListener('resize', loadNavigationMenu)