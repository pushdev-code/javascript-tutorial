const host = document.querySelector('#host'); // get the div element with id=host
let shadowRoot = host.attachShadow({ mode: 'open' }); // create the shadowRoot
let newDiv = document.createElement('div'); // create a new div element
newDiv.classList.add('shadow-dom-element');
newDiv.textContent = 'Learning the Shadow DOM'; // set text to the div element
shadowRoot.appendChild(newDiv); // append new_div into the shadow_root

console.dir(host.shadowRoot); // print the shadowRoot. Try changing mode to 'closed'.

/*
    CSS rules are applied globally, everywhere in the DOM. 
    If you see both of the divs have the same class.
    Shadow DOM -> Local scoping, separate DOM tree. It's not part of the main document
*/

let myDiv = document.createElement('div');
myDiv.textContent = 'Outer element, third-party tool - shadowDOM';
myDiv.className = 'shadow-styles';
shadowRoot.appendChild(myDiv);
