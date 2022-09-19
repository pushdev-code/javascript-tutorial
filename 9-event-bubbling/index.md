# Events

###  What is an event?

Events are actions or occurrences that happen in the web page. 
For example, when you send a form. As simple as that. 

![event](https://user-images.githubusercontent.com/36536646/78628989-72b45780-785b-11ea-98d9-8f23b7d76008.gif)

* Types of events:
  - User interface (load, unload, scroll),
  - Focus and blur.
  - Mouse (click, double-click, mouseover, mousemove, ...).
  - Keyboard (input, keydown, keypress, keyup).
  - Form (submit, change, input).
  - Mutation, observers (appendChild(),replaceChild(), insertBefore() ...).
  - CSS (transitionend, animationstart, animationend ...).
  
 ![pointer-events-child-parent](https://user-images.githubusercontent.com/36536646/78629614-2f5ae880-785d-11ea-926a-bf8401f6572e.gif)

###  Event Bubbling and Event Capturing

* Event bubbling and capturing are two ways of event propagation in the HTML DOM. 

![bubbling-capturing](https://user-images.githubusercontent.com/36536646/78631288-9bd7e680-7861-11ea-8a75-98c3ed517596.png)

* *Bubbling*: the event is first captured and handled by the innermost element and then propagated to outer elements.
 
* *Capturing*: the event is first captured by the outermost element and propagated to the inner elements.

There is a third way: The browser checks to see if the target property has an event handler for the click event registered on it, and runs it if so.

* *Target*: 

By Default `useCapture` is false. It means it is in the bubbling phase.

*See the example* [Example 1 event-bubbling](./event-bubbling/example1)

 ```javascript 
    //index.html
    <div class="parent-bubbling">
        <button class="child-bubbling">Child bubbling</button>
    </div>

    <div class="parent-capturing">
        <button class="child-capturing">Child capturing</button>
    </div>
    
    //main.js
    let parentBubbling = document.querySelector('.parent-bubbling');
    let childBubbling = document.querySelector('.child-bubbling');

    parentBubbling.addEventListener('click', () => console.log('parent clicked')); //bubbling
    childBubbling.addEventListener('click', () => console.log('child clicked')); 

    //separate divs

    let parentCapturing = document.querySelector('.parent-capturing');
    let childCapturing = document.querySelector('.child-capturing');

    parentCapturing.addEventListener('click', () => console.log('parent clicked'), true); //capturing
    childCapturing.addEventListener('click', () => console.log('child clicked'),true); 
 
 ```

* If you want to stop the event bubbling, this can be achieved by the use of the event.stopPropagation() method (in the button).

 ```javascript 
       <button class="child-bubbling" onclick="event.stopPropagation()">Child bubbling</button>
  ```
  
![tree](https://user-images.githubusercontent.com/36536646/78938086-3bba8d80-7a77-11ea-8ca5-365a9dd913bc.png)

*See the example* [Example 2 event-bubbling](./event-bubbling/example2)

 ```javascript 
 
      //index.html
      <div class="main-container">
        <div>1
            <div>2
                <div>3
                    <div>4
                        <div>5</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    //main.js 
    let logElement = document.querySelector('#log'); // get log section
    let divs = document.getElementsByTagName('div'); // get and save all the divs into an array 

    for (let i = 0; i < divs.length; i++) { //loop through the array
        divs[i].addEventListener('click', capture, true); //add capture event
        divs[i].addEventListener('click', bubble, false); //add bubble event
    }

    let clearButton = document.querySelector('#clear'); // get clear button
    clearButton.addEventListener('click', clearOutput); // add event event (by default is false = bubble)

    function log(msg) {
        logElement.innerHTML += ('<p class="result" >' + msg + '</p>');
    }

    function capture() {
        log('capture: ' + this.firstChild.nodeValue); //get value of first child element
    }

    function bubble() {
        log('bubble: ' + this.firstChild.nodeValue);  //get value of first child element
    }

    function clearOutput() {
        logElement.innerHTML = "";
    }
    
 ```
 
### Which one should I use?

* It depends... The difference is the order of the execution of the event handlers. You decide.
* Most of the time it will be fine to fire event handlers in the bubbling phase but it can also be necessary to fire them earlier.

### Conclusion

* Event bubbling: inner to outer.
* Capturing bubbling: outer to inner.

### Source

* [Quirksmode](https://www.quirksmode.org/js/events_order.html)
* [Medium](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)
* [Techsith](https://www.youtube.com/watch?v=sfKDOOJgbSI&t=283s)
* [Test your skills](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events)
