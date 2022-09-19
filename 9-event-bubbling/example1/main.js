/* BUBBLING */
let parentBubbling = document.querySelector('.parent-bubbling');
let childBubbling = document.querySelector('.child-bubbling');

parentBubbling.addEventListener('click', () => console.log('parent clicked')); //bubbling
childBubbling.addEventListener('click', () => console.log('child clicked'));

/* CAPTURING */
let parentCapturing = document.querySelector('.parent-capturing');
let childCapturing = document.querySelector('.child-capturing');

parentCapturing.addEventListener(
	'click',
	() => console.log('parent clicked'),
	true
);
childCapturing.addEventListener(
	'click',
	() => console.log('child clicked'),
	true
);
