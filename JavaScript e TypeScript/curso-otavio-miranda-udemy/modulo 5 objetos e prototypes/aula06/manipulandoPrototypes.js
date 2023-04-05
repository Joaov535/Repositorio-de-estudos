// Manipulando prototypes

// Object.prototype é o pai de todos os objetos em JavaScript

const objA = {
  chaveA: "A",
};

const objB = {
  chaveB: "B",
};

const objC = new Object();
objC.chaveC = 'C';

//o prototype do objB será o objA
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveC);
