# Javascript Shadow DOM

## What is the DOM?

The **Document Object Model** represents the data of the content object within a website. It compromises the structure and the content of the appliaction, and it could be modified through the JavaScript API.

```javascript
//Basic hmtl
<html>
	<head>
		<title>My title</title>
	</head>
	<body>
		<a href=''>My link</a>
		<h1>My header</h1>
	</body>
</html>
```

DOM for the html file:

![DOM](https://user-images.githubusercontent.com/36536646/78725560-74caf480-78f5-11ea-802c-c9de32e64a55.gif)

- Shadow DOM is a DOM feature that helps you to build components. You can think of shadow DOM as a scoped subtree inside your element.
- Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree.
- This shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM. [Shadow DOM DeveloperMozilla](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

![shadowDOM](https://user-images.githubusercontent.com/36536646/78725983-7d6ffa80-78f6-11ea-8267-d63071604927.png)

- `Shadow host`: The regular DOM node that the shadow DOM is attached to.
- `Shadow tree`: The DOM tree inside the shadow DOM.
- `Shadow root`: The root node of the shadow tree.

* With the open mode you can access the Shadow DOM via the shadowRoot property of the HTML element.
* With the closed mode you cannot. shadowRoot will return null.

_See the example_ [Shadow DOM](./shadowDOM)

### What's next?

- Styling and shadow DOM.
- Event handling and shadow DOM.
- Multiple shadow roots.

### Real Life Example

```javascript
<custom-element></custom-element>

<script>
customElements.define("custom-element", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background: blue;
          padding: 4px;
          color: white;
        }
      </style>
      <div>
        <p>Custom Element</p>
      </div>
    `;
  }
});
</script>
```

Shadow DOM allows you to provide better and easier encapsulation, by creating another clone of the DOM or part of it. (vs `iframe` for example).

### Exercise:

- Create a Custom [Accordion](https://codepen.io/matthewvincent/pen/EKKeyX) Component using [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) and Shadow DOM. It should have its own styles.

### Sources

- What is [Shadow Dom](https://lenguajejs.com/webcomponents/nativos/que-es-shadow-dom/).
