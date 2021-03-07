const {Leia} = require("../src/index");

const leia = new Leia();

it('should convert a stroke delimited string to camelCase', () => {
	expect(leia.camelCase("font-size")).toBe("fontSize");
	expect(leia.camelCase("border-radius-left")).toBe("borderRadiusLeft");
});