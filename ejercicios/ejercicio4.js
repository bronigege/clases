let variable1 = "hola";
let variable2 = "que";
let variable3 = "tal";
let auxiliar;

console.log(variable1);
console.log(variable2);
console.log(variable3);

auxiliar = variable1;
variable1 = variable2;
variable2 = variable3;
variable3 = auxiliar;

console.log(variable1);
console.log(variable2);
console.log(variable3);