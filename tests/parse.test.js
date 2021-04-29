const {Leia} = require("../src/index");

const leia = new Leia();

it('should convert CSS code into a style object', () => {
	let css = '.row, .container {width: 90%; margin: auto; padding: 5px;}'
	leia.parse(css)
	expect(Object.keys(leia.styles)).toStrictEqual(['.row-.container'])
});