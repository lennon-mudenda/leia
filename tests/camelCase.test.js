const {camelCase} = require("../src/index");


it('should convert a stroke delimited string to camelCase', () => {
	expect(camelCase("font-size")).toBe("fontSize");
	expect(camelCase("border-radius-left")).toBe("borderRadiusLeft");
});