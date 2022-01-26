export function myPush(array, element) {
    const returnArray = [];
    for (let i = 0; i < array.length; i++) {
        returnArray[i] = array[i];
    }
    returnArray[array.length] = element;
    return returnArray;
}

const arrayPrueba = ["queso", "casa", "chozas", "jefe"];
myPush(arrayPrueba, "esto");
//console.log(myPush(arrayPrueba, "esto")); // para comprobar que funciona
