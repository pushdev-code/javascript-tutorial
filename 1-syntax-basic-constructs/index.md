# Javascript Syntax and Basic Constructs

Javascript is a multi-paradigm programming language usually used to make web pages interactive that conforms to the ECMAScript specification.

JavaScript code is written into an HTML page, when a user requests an HTML page with JavaScript in it, the script is sent to the browser and it's up to the browser to do something with it.

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

[The ECMA-262 specification](https://www.ecma-international.org/publications/standards/Ecma-262.htm) contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.

## The basics

JavaScript was initially created to make web pages interactive and manipulate the logic behind rendering an HTML document.

The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

JavaScript defers from other languages because the JS scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

With Javascript you'll be able to:

* Add new HTML to the page, change the existing content, modify styles.
* React to user actions, run on mouse clicks, pointer movements, key presses.
* Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
* Get and set cookies, ask questions to the visitor, show messages.
* Remember the data on the client-side (“local storage”).

### How to add JS to our HTML

Script tag:

```html
<!DOCTYPE HTML>
<html>
<body>
  <script>
    alert( 'Hello, world!' );
  </script>
</body>
```

Referencing a .JS file:

```html
<!DOCTYPE HTML>
<html>
<body>
  <script src="my-file.js"></script>
</body>
```

Note: If src attribute is specified, the content of the `<script>` tag will be ignored.

Inline, inside elements attribute:

```html
<!DOCTYPE HTML>
<html>
<body>
  <a href="#" onclick="(function(){alert(this);})()">Click Me</a>
</body>
```

## Syntax and Basic Constructs

Javascript has Curly-bracket syntax.

```js
  {
    ///...instructions
  }
```

### Statements

Statements are syntax constructs and commands that perform actions.

```js
  alert('Hello, world!')
```

### Semicolons

A semicolon may be omitted in most cases when a line break exists, but if you like you can use them in every line.

```js
  alert('Hello!');
  alert('world!');
```

### Comments

Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

* One-line comments start with two forward slash characters `//`.
* Multiline comments start with a forward slash and an asterisk `/*` and end with an asterisk and a forward slash `*/.`
* The content of comments is ignored, so if we put code inside `/* … */`, it won’t execute.

Please, comment your code!

### “use strict”

For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".

When "use strict" or 'use strict' is located at the top of a script, the whole script works the “modern” way.

```js
"use strict";

// this code works the modern way
...
```

### Variables

A variable is a “named storage” for data. We can use variables to store data.

```js
  let userData;
```

### Variable naming

* The name must contain only letters, digits, or the symbols `$` and `_`.

* The first character must not be a digit.

### Constants

To declare a constant (unchanging) variable, use const instead of let:

```js
  const userData;
```

### Name things right

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

## Conditional Operators (if)

When two different actions need to happen under two different conditions, you can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

```js
  if (condition) {
    // statements when condition is true
  }
  else {
    // statements when condition is false
  }
```

### else if

When you need to have more than two different conditions, you can use `else if`.

```js
  if (condition) {
    // statements when condition is true
  }
  else if (condition) {
    // statements when a second condition is true
  }
  else {
    // statements when above conditions are false
  }
```

### Conditional operator ‘?’

With the question mark operator you can do conditionals in a single line:

```js
let result;
if(condition) {
  result = value1;
}
else {
  result = value2;
}
```

This can be simplified to a single line statement:

```js
let result = condition ? value1 : value2;
```

## Functions

Functions allow the code to be called many times without repetition. Function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

### Function Syntax

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

* The function's name.
* The parameters of the function, enclosed in parentheses and separated by commas.
* The JavaScript statements that define the function, enclosed in curly brackets, `{...}`.

```js
function name-of-function(list_of_parameters) {
  // javascript statements
}
```

### Function Example:

```js
function showHello(name) {
  alert('Hello ' + name + '!');
}

showHello('Fabian');
showHello('Sebastian');
```

## Exercise

1. In your forked `Javascript tutorial` repo, create a new branch named `feature/basic-exercise`
2. Create two files in `1-syntax-basic-constructs` folder: 1. HTML file called `basic-js.html` 2. Javascript file called `basic.js`.
3. In the javascript file, create a function that asks for your age using a `prompt` and then an `alert` should tell if the age is greater than 18.
If it's greater than 18 it should display this message: `you're an adult!` otherwise it should display `you're not an adult`.
4. Refer the JS file in the HTML so the code can be executed in the browser by opening `basic-js.html`.
5. Push your changes and create the Pull request.

## Sources

[Javascript.info](https://javascript.info)
