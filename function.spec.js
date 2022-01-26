import { myPush } from "./function.js";

const arrayPrueba = ["queso", "casa", "chozas", "jefe"];

describe("Give the function strctEqual", () => {
    describe("When it receives the parameters 1 and 1", () => {
        test("should return true", () => {
            expect(myPush(arrayPrueba, "esto")).toEqual([
                "queso",
                "casa",
                "chozas",
                "jefe",
                "esto",
            ]); // test es una variable aquí, puede llamarse de cualquier forma
        });
    });
});
