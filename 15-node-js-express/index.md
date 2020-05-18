# NodeJS and Express

In this section we are going to work with REST, JSON and NodeJS-Express.

## NodeJS

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Basically... it's a framework used for scalable server-side and networking applications.

[Download](https://nodejs.org/es/download)

## Express

Is a Node.js web application server framework, which is designed for building single-page, multi-page, and hybrid web applications.

It has become the standard server framework for node.js. Express is the backend part of something known as the MEAN stack (MongoDB, ExpressJS, AngularJS, NodeJS).

Install:

```
  mkdir express-demo
  cd express-demo
  npm init --yes
  npm install express
```

First web server:

1. Create index.js

```js
  const express = require('express');
  const app = express();

  app.get('/', function (req, res) {
    res.send('hello world')
  });
  app.listen(3000);
```

2. In your current folder run

```js
  node index.js
```

3. Open http://localhost:3000 in your browser and a hello world message should appear.

## REST

Representational State Transfer -> Architectural style.

It is a coordinated set of architectural constraints that restrict the roles / functions of architectural elements and the permitted relationships between those elements within any architecture that fits that style.

* Client / Server
* Stateless: The status of the resource is handled by the client, never by the server.
* Uniform interface (HTTP)

Methods:

* POST (C)
* GET (R)
* PUT (U)
* DELETE (D)

https://restcountries.eu/

## JSON

JSON: JavaScript Object Notation.

JSON is a syntax for storing and exchanging data.

JSON is text, written with JavaScript object notation.

Data is represented in name/value pairs

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

## Exercise

1. Build a Web server using express.js. Use the files from this content.
2. Use the route `/submit-form` to receive your form data values. Forms are received using ``app.post('/submit-form')``
3. ``console.log`` the `req.body` values.
4. Start your node.js server `node index.js`
4. Open `form.html` from the `2-dom-manipulation` exercise using a liveserver.
5. Use your `fetch`, `async`, `await` knowledge to submit the form to this URL http://localhost:3000/submit-form Remember the form data is usually sent through the POST method.
6. Type some data and submit the form.
7. Check your terminal console, the values you sent in the form should now appear in your command line.

## Tutorials

https://www.youtube.com/watch?v=pKd0Rpw7O48&t=9s

https://medium.com/@asfo/desarrollando-una-sencilla-api-rest-con-nodejs-y-express-cab0813f7e4b
