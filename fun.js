//let calc = function (a,b) {
//    return (a + b);

//}

let calc = (a,b) => a+b

console.log(calc(3,4));

console.log(calc(9,5));


function retVar() {
    let num = 50;
    return num;

}

let anotherNum = retVar();

console.log(anotherNum);


let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let double = "12.2px";

//console.log(Math.round(double));

console.log(parseInt(double));
console.log(parseFloat(double));
