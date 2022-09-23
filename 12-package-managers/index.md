# Package Managers

A package manager is a system that will manage your project **dependencies**.

## NPM (Node Package Manager)

- **npm** is the world's largest **Software Library** (more than 11 million developers worldwide and more than one million packages). The free npm Registry has become the center of JavaScript code sharing.
- **npm** is also a software **Package Manager** and **Installer**
- **npm** Inc is the company behind the npm Registry and npm CLI.
- **npm** is free to use. [https://www.npmjs.com/products](https://www.npmjs.com/products)
- You can download all npm public software packages without any registration or logon.

## What is Yarn

- Yarn is an alternative package manager created by Facebook.
- The main difference between NPM and Yarn is the **package installation process**. Yarn installs packages in parallel. Yarn is optimized to fetch and install multiple packages at once. NPM will perform a serial installation process.

## How to install it

- **npm** is installed with **Node.js.** This means that you have to install Node.js to get npm installed on your computer.
- Download Node.js from the official Node.js web site: [https://nodejs.org](https://nodejs.org/).

## How to install packages

- `npm install <package>`
- All **npm** packages are defined in files called **[package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)**.
- Please check the [semver docs](https://www.notion.so/S-a24adaa62b7741178af82582ca64d9c9)
- The content of package.json must be written in **JSON**.
- At least two fields must be present in the definition file: **name** and **version**.

```json
{
	"name" : "foo",
	"version" : "1.1.1",
	"description" : "A package for fooing things",
	"main" : "foo.js",
	"keywords" : ["foo", "fool", "foolish"],
	"author" : "John Doe",
	"licence" : "ISC"
}
```

- npm foster [semantic versioning specs](https://docs.npmjs.com/about-semantic-versioning). It is a good practice for healthy, reliable, and secure packages.
- Let's check the npm [terminology](https://nodesource.com/blog/understanding-how-node-js-release-lines-work/)

## Built-in scripts and Aliases

```json
{
    "scripts": {
        "start": "node app.js",
        "test": "jest ./test",
        "hello-world": "echo \"Hello World\""
    }
}
```

## Executing multiple scripts

- To run multiple scripts **sequentially**, we use `&&`. For example: `npm run lint && npm test`
- To run multiple scripts **in parallel**, we use `&`. For example: `npm run lint & npm test`. (for UNIX environments)

We can create "pre" and "post" scripts for *any of our scripts*, and NPM will automatically **run them in order**

```json
{
    "scripts": {
        "prehello": "echo \"--Preparing greeting\"",
        "hello": "echo \"Hello World\"",
        "posthello": "echo \"--Greeting delivered\""
    }
}
```
## Accessing environment variables

```json
"scripts": {
 	"start": "NODE_ENV=test node main.js"
},
```

Then use `process.env.NODE_ENV` in your app.

## Passing arguments

- `npm run <command> [-- <args>]`
- `npm run start -- --foo=3`
- `console.log('process.argv', process.argv);`

## Sources

- [NPM vs Yarn](https://www.imaginarycloud.com/blog/npm-vs-yarn-which-is-better/#:~:text=As%20previously%20stated%2C%20Yarn%20installs,files%20to%20the%20offline%20cache)
- [Mastering NPM scripts](https://dev.to/paulasantamaria/mastering-npm-scripts-2chd)
