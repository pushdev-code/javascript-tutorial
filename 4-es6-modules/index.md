# ECMAScript 6

  ### What is JavaScript?
  
  * JavaScript (1996) is mostly known as a client-side scripting language. Now this concept has changed. Do you remember NodeJS?.
  * With NodeJS we can use JavaScript as a server-side scripting language.
  * Scripts that keep the web page alive...
  
  <img src="https://miro.medium.com/max/1392/0*Bvk27SKKqJu64d3L.">
 
  ### What is ECMAScript?
  
   * ECMAScript is a scripting-language specification standardized by ECMA. 
     ECMA => (European Computer Manufacturers Association) is a standards organization for information and communication systems.
   * It was created to standardize JavaScript.
   * The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1.
   * In 2009 ECMAScript 5 was launched with new features. (getters and setters, library support for JSON, Object properties...)
   * Angular, React and Vue use EC6. 
   
     ```javascript
        if(study.ES6 && study.JS) learn_frameworks = true 
     ```
     <img src="https://miro.medium.com/max/1575/1*_FOV6txTo25KQ8NmPdbliQ.gif"> 
      
   ### Ok but... Why ECMAScript 6?
   
   * Less code, cleaner readable and fast!
   
   * Do you remember [Can I use?](https://caniuse.com/)
   
   ### Ok but... What if I use Internet Explorer?
   
   * You can use [Babel](https://babeljs.io/)
   
   ![Babel](https://user-images.githubusercontent.com/36536646/78098972-29b95a80-73a6-11ea-91df-40d6b9492b2c.PNG)
 
   ### Let's code
   
   *  ECMAScript6 is the version launched in 2015, that introduced new features like:
      
      + Constants
      
      ```javascript
        //ES5
        Object.defineProperty(typeof global === "object" ? global : window, "PI", {
            value:        3.141593,
            enumerable:   true,
            writable:     false,
            configurable: false
        })
        PI > 3.0;
        
        //ES6
        const PI = 3.141593
        PI > 3.0
        
        var x = 5;
        // Here x is 5
        function change_value(){
          const x = 1;
          // Here x is 1
        }
        // Here x is 5 
      ```
      + Scoping
      
      ```javascript
        //ES5
          var i, x, y;
          for (i = 0; i < a.length; i++) {
              x = a[i];
          }

        //ES6
          for (let i = 0; i < a.length; i++) {
              let x = a[i]
          }
      ```
      
      + Arrow Functions
      
      ```javascript
        //ES5
        odds  = evens.map(function (v) { return v + 1; });
        pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
        nums  = evens.map(function (v, i) { return v + i; });

        //ES6
        //map
        let evens = [1,2,3,4,5];
        odds  = evens.map(v => v + 1) //[ 2, 3, 4, 5, 6 ]
        pairs = evens.map(v => ({ even: v, odd: v + 1 })) 
        nums  = evens.map((v, i) => v + i) //[ 1, 3, 5, 7, 9 ]
        
        //reduce
        const arr = [5,10,15,20,25];
        const result = arr.reduce((total,currentValuE) =>{
          console.log(currentValue)// 5 10 15 20 25
          return total + currentValue;
        });
        console.log(result) //75
        
        //filter
        var arr = ['tennis','cricket','football','golf','running'];
        const result = arr.filter(arr => arr.length > 6);
        console.log(result); // ['cricket','football','running']
      ```
      
      + Classes (Definition,inheritance,Getters and setters)
      
      ```javascript
      //ES5
      var Rectangle = function (id, x, y, width, height) {
       Shape.call(this, id, x, y);
          this.width  = width;
          this.height = height;
      };
      Rectangle.prototype = Object.create(Shape.prototype);
      Rectangle.prototype.constructor = Rectangle;
      
      //ES6
      class Car extends Vehicle{
        constructor(brand, license_plate) {
          this.license_plate = license_plate;
          this.brand = brand;
        }
      }
      mycar = new Car("Ford","AUC666");
      ```
      + Extended Parameter Handling
      
       ```javascript
        //ES5
        function f (x, y, z) {
            if (y === undefined)
                y = 7;
            if (z === undefined)
                z = 42;
            return x + y + z;
        };
        f(1) === 50;

        //ES6
         function f (x, y = 7, z = 42) {
            return x + y + z
        }
        f(1) === 50
      ```
      
      + Template Literals
      
       ```javascript
       //ES5
        var customer = { name: "Foo" };
        var card = { amount: 7, product: "Bar", unitprice: 42 };
        var message = "Hello " + customer.name + ",\n" + "want to buy " + card.amount + " " 
        + card.product + " for\n" + "a total of " +   (card.amount * card.unitprice) + " bucks?";
        
       //ES6
        var customer = { name: "Foo" }
        var card = { amount: 7, product: "Bar", unitprice: 42 }
        var message = `Hello ${customer.name},
        want to buy ${card.amount} ${card.product} for
        a total of ${card.amount * card.unitprice} bucks?`
        ```

      + Enhanced Object Properties
       
       ```javascript
       //ES5
       var x = 0, y = 0;
       obj = { x: x, y: y };  
        
       //ES6
       var x = 0, y = 0
        obj = { x, y }
       ```
      
      + Destructuring
      
       ```javascript
            // My example - Unnecessary
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            date_ob : req.body.date_ob,
            gender : req.body.gender,
            socio_status : req.body.socio_status
            
            //ES6
            const { first_name, last_name, email, date_ob, gender, socio_status } = req.body;
            
            //Other examples E6
            let a, b, rest;
            [a, b] = [10, 20];
            console.log(a); // 10
            console.log(b); // 20

            [a, b, ...rest] = [10, 20, 30, 40, 50];
            console.log(a); // 10
            console.log(b); // 20
            console.log(rest); // [30, 40, 50]

            ({ a, b } = { a: 10, b: 20 });
            console.log(a); // 10
            console.log(b); // 20


            // Stage 4(finished) proposal
            ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
            console.log(a); // 10
            console.log(b); // 20
            console.log(rest); // {c: 30, d: 40}
        ```
      
      + Export, Import
      
       ```javascript
            //ES6
            //  lib/math.js
            export function sum (x, y) { return x + y }
            export var pi = 3.141593

            //  someApp.js
            import * as math from "lib/math"
            console.log("2π = " + math.sum(math.pi, math.pi))

            //  otherApp.js
            import { sum, pi } from "lib/math"
            console.log("2π = " + sum(pi, pi))
       ```
      + Data Structures (Set, Map...)
       ```javascript
            //ES6
            //Set
            let s = new Set()
            s.add("hello").add("goodbye").add("hello")
            s.size === 2
            s.has("hello") === true
            for (let key of s.values()) // insertion order
                console.log(key)
                
            //Map
            let m = new Map()
            let s = Symbol()
            m.set("hello", 42)
            m.set(s, 34)
            m.get(s) === 34
            m.size === 2
            for (let [ key, val ] of m.entries())
                console.log(key + " = " + val)
        ```
      + [Others...](http://es6-features.org/#PromiseUsage)
         
  ### ES7
  
  A yearly update means no more big releases like ES6. ECMAScript 2016(ES7) introduced only two new features:
  
  * Array.prototype.includes()
  * Exponentiation operator
  
  ## Do you understand?
  
  1. Create index.html, country.js, and main.js
  2. In main.js, Fetch from https://restcountries.com/#api-endpoints-v3-code all the Europeans countries using constants and scoping.
  3. In country.js, create a Country class with name and currency attributes.
  4. In main.js, For each country create an instance of Country class. Import country module and Save each country in an array.
  5. Filter the country with the condition *currency==dollar*. Use the filter method (Arrow function).
  6. Use Template Literals to print the filter results. *Country #i: country_name - country_currency*
  
  ### References
  
  * [JavaScript==ECMAScript?](https://medium.com/@shreyapd06/javascript-ecmascript-a18d3e688526)
  * [ECMAScript: from Roots to ECMAScript 2017](https://medium.com/sfl-newsroom/ecmascript-from-roots-to-ecmascript-2017-ce92afc96447)
  
# Modular JavaScript

  * Good programmers divide their programs into modules.
  * Maintainability, Reusability, Namespacing (scope).
  * Frameworks use Modular Javascript.
  * Keep in mind the relative path! 
  
Our exercise look like this:

 ```javascript
   index.html
   main.js
   modules/
          country_class.js
          request_provider.js
   ```

## Exporting module features

   ```javascript 
      // variables
      export const PI = 3.141593;
      
      // In our example
      export {Country};
   ```

## Importing features into your script

```javascript 
      // multiple features
      import { PI, draw, reportArea, reportPerimeter } from './modules/square.js';
      
      // In our example
      import {Country} from './modules/country_class.js'
      import {RequestProvider} from './modules/request_provider.js'
 ```

### Source

  * [ES6 - Features](https://github.com/rse/es6-features)
  * [Freecodecamp](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/)
  * [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  * [Slides ES6](https://slides.com/jmgr2996/deck-77bdab) 
 
