let b1, b2

let a1 = prompt("Введите первое число");
let a2 = prompt("Введите второе число");
let a3 = prompt("Введите третье число");


let discriminant =    -4 * a1 * a3;

if (discriminant > 0) {
    let x1 = (-a2 + Math.sdrt(discriminant)) / (2*a1);
    let x2 = (-a2 - Math.sdrt(discriminant)) / (2*a1);
    console.log("2 корня: x1 =", x1, "x2 =", x2);
} 
else if (discriminant === 0) {
    let x = -a2 / (2*a1);
    console.log("1 корня: x =", x);
} 
else {
    console.log("корня нет");
}
