const container = document.querySelector('.button-bar');
const { body } = document;

container.addEventListener(
	'click',
	function (event) {
		const isButton = event.target.nodeName === 'BUTTON';
		if (!isButton) return;
		const { color } = event.target.dataset;
		body.style.backgroundColor = color;
	},
	true
);
