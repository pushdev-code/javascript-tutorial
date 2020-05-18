# Javascript DOM Manipulation

The backbone of an HTML document is tags.

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

All these objects are accessible using JavaScript, and we can use them to modify the page.

```js
  // Accesing the body tag
  document.body
```

To manipulate DOM elements, like changing its content you can use `innerHTML`.

```js
  // Manipulating the content of the body tag
  document.body.innerHTML = "<p>New boyd content</p>";
```

The DOM represents HTML as a tree structure of tags.

Every tree node is an object.

Tags are element nodes (or just elements) and form the tree structure: `<html>` is at the root, then `<head>` and `<body>` are its children, etc.

HTML comments are other node types besides elements and text nodes.

An HTML/XML document is represented inside the browser as the DOM tree.

* Tags become element nodes and form the structure.
* Text becomes text nodes.
* …etc, everything in HTML has its place in DOM, even comments.
We can use developer tools to inspect DOM and modify it manually.

## Walking the DOM

To find elements and their contents it is necessary to walk the DOM.

Topmost nodes:

* `<html>` = `document.documentElement`
* `<body>` = `document.body`
* `<head>` = `document.head`

## Children nodes

* Child nodes (or children) – elements that are direct children. In other words, they are nested exactly in the given one. For instance, `<head>` and `<body>` are children of `<html>` element.
* Descendants – all elements that are nested in the given one, including children, their children and so on.
* The childNodes collection lists all child nodes, including text nodes.
* Properties `firstChild` and `lastChild` give fast access to the first and last children.

## Searching elements

To have a direct access to elements, there are several methods to achieve this goal:

* `document.getElementById('id-of-element')` To access element with an specific ID attribute.
* `querySelectorAll('css-selector')` returns all elements matching the given CSS selector.
* `querySelector('css-selector')` returns the first element for the given CSS selector.
* `getElementsByName('name-of-element')` returns all elements matching the name attribute.
* `getElementsByTagName('tag-of-element')` returns all elements matching the tag of the element.
* `getElementsByClassName('class-attribute')` returns all elements matching the class attribute.

## Exercise

1. In your forked `Javascript tutorial` repo, create a new branch named `feature/dom-exercise`
2. Copy your `form.html` file from the `html-tutorial` repo into the `2-dom-manipulation` folder: Create a new Javascript file called `form.js`.
3. Reference the `form.js` so it can be used in `form.html`.
4. In `form.js`, query the form and add an event listener for detecting the submit event.

Example:
```js
  function validaTeForm(event){
    event.preventDefault();
    // Write the logic to validate the form fields
    // Print the user selected values in the console
    console.log('form validation');
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', validaTeForm);
```
5. Validate your form fields by matching this criteria:

* `Name` is required.
* `Email` is required and it needs to be a valid email.
* The `telephone` needs to be numbers only.
* At least one course must be selected.

6. Print the form values in the HTML (below the form) if all of them are correct only, display the corresponding message if the form has an error.
7. Push your changes and create the Pull request.
