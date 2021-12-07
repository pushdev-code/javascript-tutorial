# Javascript Fetch API / Ajax (XHR

## Promises

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

```js
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
```

When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:

* `resolve(value)` — if the job finished successfully, with result value.
* `reject(error)` — if an error occurred, error is the error object.

There can be only a single result or an error

### Consumers: then, catch, finally

A Promise object serves as a link between the executor (the “producing code”) and the consuming functions, which will receive the result or error. Consuming functions can be registered (subscribed) using methods `.then`, `.catch` and `.finally`.

### Then

The first argument of `.then` is a function that runs when the promise is resolved, and receives the result.

The second argument of `.then` is a function that runs when the promise is rejected, and receives the error.

```js
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);
```

### Catch

The call `.catch(f)` is a shorthand for `.then(null, f)`.

### Finally

The call `.finally(f)` is a shorthand for  `.then(f, f)` in the sense that f always runs when the promise is settled: be it resolve or reject.

`finally` is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

### Promises chaining

Because a call to `promise.then` returns a promise, we can call the next `.then` on it and so on in a chain of `Promises`.

```js
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
```

## Fetch

JavaScript can send network requests to the server and load new information whenever is needed.

```js
let promise = fetch(url, [options]);
```

* `url` – the URL to access.
* `options` – optional parameters: method, headers etc. Without options, that is a simple GET request, downloading the contents of the url.

There’s an umbrella term “AJAX” (abbreviated Asynchronous JavaScript And XML) for network requests from JavaScript. We don’t have to use XML though: the term comes from old times, that’s why that word is there. You may have heard that term already.

The `fetch()` method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.

Example:

```js
function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json());
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
```

More info: https://javascript.info/fetch

## Async/Await

`async/await` is a more comfortable way of working with `promises`

### Async

```js
async function f() {
  return 1;
}
f().then(alert); // 1
```

The word “async” before a function means the function always returns a promise.

### Await

`await` works only inside async functions and makes JavaScript wait until that promise settles and returns its result.


```js
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}
f();
```

## Exercise

1. In your forked `Javascript tutorial` repo, create a new branch named `feature/fetch-exercise`
2. Create `fetch.html` and `fetch.js` files in the `3-fetch-api-ajax` folder.
3. Reference the `fetch.js` so it can be used in `fetch.html`.
4. Create a fetch request to this URL https://api.github.com/repos/pushdev-code/javascript-tutorial/commits
5. Display the image of the commit author and the committer name in `fetch.html`.
6. Push your changes and create the Pull request.
