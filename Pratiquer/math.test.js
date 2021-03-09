const math = require ("./math.js");
console.log(math);

it("adds 1 + 2 equal 3", () => {
   expect(math.sum(1,2)).toBe(3);
});

it("remove 3 - 2 equal 1", () => {
   expect(math.remove(3,2)).toBe(1);
});