## JavaScript Classes

Object Oriented Programming is **a programming paradigm that relies on the concept of classes and objects**. It is used to structure a software program into reusable pieces of code, usually called classes. Those classes are used to create individual instances of objects.

```js
// Constructor: Class based pattern that uses the constructor present in the class to create specific types of objects.
class Animal {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log(`${this.name} is eating... 🐽`);
	}
}

const animal = new Animal('coco');
```

**Inheritance**

Inheritance allow us to extend properties and characteristics from other classes.

```js
// We use the extends keyword to say that this class inherits from another class.
class Dog extends Animal {
	constructor(name, age) {
		// call the superclass constructor using super(), passing up the name parameter
		super(name);
		this.age = age;
	}

	bark() {
		console.log(`guau! guau! 🐶`);
	}
}

const coco = new Dog('coco', 12);
coco.eat();
coco.bark();
```

**Encapsulation**

Encapsulation is used to hide the values of a structured data object inside a class. It will restring the direct access to some object's component.

```js
class Dog extends Animal {
	#years;

	constructor(name, years) {
		super(name);
		this.#years = years;
	}

	bark() {
		console.log(
			`guau guau! I'm ${this.name}, and I'm ${this.#years} years old.`
		);
	}
}

const dog = new Dog('Coco', 1);

dog.bark(); // guau guau! I'm Coco, and I'm 1 year old.
dog.#years; // SyntaxError
```

**Private methods**

Private methods can only be called by the object's own methods.

```js
class Example {
	publicMethod() {
		this.#privateMethod();
	}

	#privateMethod() {
		console.log('Calling private method...');
	}
}

const myExample = new Example();

myExample.publicMethod(); // 'Calling private method...'
myExample.#privateMethod(); // SyntaxError
```

### Exercise

Create a WhatsAppPhoneBook class that stores names, profilepics and phone numbers and allows the operations of look-up, insertion and deletion.
`WhatsAppPhoneBook` should have a list of `WhatsAppContact` entities. `WhatsAppContact` (name, profile pic and phone number) should extend from `Contact` (name and phone number).

- WhatsAppPhoneBook() - It creates a new empty `WhatsAppPhoneBook`.
- insert(name, number, profilepic) - Inserts a new `WhatsAppContact` entry in the `WhatsAppPhoneBook`.
- lookUp(number) - Looks up the entry based on the name. Should print the name, number and profilepic.
- lookUpContactsWithProfilePic() - Private method that prints all the WhatsApp Contacts with profilepic.
- delete(number) - Deletes the entry.

1. Create a new branch named `feature/classes-yourname`.
2. Complete the exercise with classes exercise.
3. Execute `node classes-yourname.js` to make sure it runs correctly.
4. Create a Pull request.
