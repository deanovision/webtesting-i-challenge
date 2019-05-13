const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("success", () => {
    test("when enhancement succeeds The items enhancement increases by 1", () => {
      const sample = {
        name: "John Doe",
        durability: 100,
        enhancement: 10
      };

      const expected = {
        name: "John Doe",
        durability: 100,
        enhancement: 11
      };

      expect(enhancer.succeed(sample)).toEqual(expected);
    });
    test("If the item enhancement level is 20, the enhancement level is not changed", () => {
      const sample2 = {
        name: "John Doe",
        durability: 100,
        enhancement: 20
      };
      const expected2 = {
        name: "John Doe",
        durability: 100,
        enhancement: 20
      };
      expect(enhancer.succeed(sample2)).toEqual(expected2);
    });
  });
  describe("fail", () => {
    test("If the items enhancement is less than 15, the durability of the item is decreased by 5", () => {
      const sample = {
        name: "John Doe",
        durability: 100,
        enhancement: 10
      };

      const expected = {
        name: "John Doe",
        durability: 95,
        enhancement: 10
      };

      expect(enhancer.fail(sample)).toEqual(expected);
    });
    test("If the items enhancement is 15 or more, the durability of the item is decreased by 10", () => {
      const sample = {
        name: "John Doe",
        durability: 100,
        enhancement: 15
      };

      const expected = {
        name: "John Doe",
        durability: 90,
        enhancement: 15
      };

      expect(enhancer.fail(sample)).toEqual(expected);
    });
  });
});
