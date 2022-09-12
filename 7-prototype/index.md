# JavaScript Prototype

## What is Prototype in Javascript?

In Javascript the objects can inherit features from each other by using `Prototypes`. In this Tutorial you will see how Prototype works and look at how it can be used to reuse methods and apply Object Oriented Programming to Javascript.

JavaScript is often described as a prototype based language to provide inheritance. The objects can have a prototype object, which acts as a template object that inherits methods and properties from.

Let's see an example: We have a user object with its properties and methods, and want to allow users to login and logout. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

```js
class User {
	constructor(email, name) {
		this.email = email;
		this.name = name;
		this.online = false;
	}
	login() {
		this.online = true;
		console.log(`${this.name} has logged in`);
	}
	logout() {
		this.online = false;
		console.log(`${this.name} has logged out`);
	}
}

let user1 = new User('email@pushdev.co', 'Fabian');
user1.login();

let user2 = new User('email2@pushdev.co', 'Sebastian');
user2.login();

console.log(User.prototype);
console.log(user1.prototype); // Instances have no prototype but they all have __proto__
console.log(user2.__proto__);
console.log(User.prototype === user2.__proto__);

// How can we add a method without modifying the User Class?
// by using the prototype. This is the correct way. You can use __proto__ on instances but that's not a good practice.

User.prototype.getEmail = function () {
	return this.email;
};

console.log(user1.getEmail());
console.log(user2.getEmail());
```

How to get the prototype of an object?

```js
const prototype1 = {};
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
```

An object's prototype object may also have a prototype object, which inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

The prototype chain's behavior is less like inheritance and more like delegation. Delegation is a programming pattern. When an object is asked to perform a task it could ask another object to perform the task on its behalf.

<img width="784" alt="Screen Shot 2022-09-06 at 10 16 03 PM" src="https://user-images.githubusercontent.com/36536646/188780832-65e426aa-14d7-4807-9ea8-359b8113fd16.png">

[Example shown in the image by MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain).

We can use this feature within native Javascript objects like String, Array, Boolean, or any other Object.

```js
console.log('hello'.toUpperCase()); // toUpperCase() comes by default

String.prototype.distance = function (char) {
	// Distance is a custom method we've added
	const index = this.indexOf(char);
	if (index === -1) {
		console.log(`${char} does not appear in ${this}`);
	} else {
		console.log(
			`${char} is ${this.length - index} characters from the end of the string!`
		);
	}
};

console.log('hello'.distance('h'));
```

**Constructors**

We can ensure that all the objects created with that constructor are given that prototype:

```js
const animalPrototype = {
	eat() {
		console.log(`eating...`);
	},
};

const dogPrototype = {
	bark() {
		console.log(`guau! guau!, my name is ${this.name}!`);
	},
};

// Constructor: allow us to define the "shape" of an object (methods and properties). We can create as many objects as we like, just updating the values for the properties that are different.
function Dog(name) {
	this.name = name;
}

// If a method is defined on a constructor's prototype property
// then all the objects created using that constructor get that method via their prototype,
// we don't need to define it in the constructor.
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
Object.assign(Dog.prototype, { ...animalPrototype, ...dogPrototype });
const dog = new Dog('coco');
dog.bark();
dog.eat();
```

_Note_: In general is not a good practice to modify the prototype in global objects because it can be modified in several places. For example one library will add map method to Array's prototype and your own code will add the same but with another purpose. So one implementation will be broken.

- Class-based OOP, classes and objects are two separate constructs. `class` vs `function`. Objects are always created as instances of classes.
- Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.
- Cat and Dog objects can have Animal prototypes, then they can inherit the common properties, while adding and redefining those properties which need to differ.
- Constructors and Prototypes can be used to implement class-based Object Oriented Programming patterns in JavaScript. But using them to implement inheritance is tricky.

### Exercise

Write a method to capitalize the first letter of any String.

```js
console.log('push'.capitalizeFirstLetter() === 'Push'); // This should return true
```

1. Create a new branch named `feature/prototype-yourname`.
2. Complete the exercise with prototype exercise.
3. Execute `node prototype-yourname.js` to make sure it runs correctly.
4. Create a Pull request.

# Sources

- [Object prototypes | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
