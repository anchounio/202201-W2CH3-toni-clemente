import { strictEquals } from "./function.js";

//pasado a testing con jest el challenge 2 de la segunda semana
describe("Give the function strctEqual", () => {
    describe("When it receives the parameters 1 and 1", () => {
        test("should return true", () => {
            expect(strictEquals(1, 1)).toBe(true); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals(NaN, NaN)).toBe(false); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals(0, -0)).toBe(true); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals(-0, 0)).toBe(true); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals(1, "1")).toBe(false); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals(true, false)).toBe(false); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals(false, false)).toBe(true); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
    describe("When it receives the parameters NaN and NaN", () => {
        test("should return false", () => {
            expect(strictEquals("water", "oil")).toBe(false); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
});
