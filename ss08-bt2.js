let number = +prompt("Mời nhập số: ");
let result = 1;
for (let i = 1; i <= number; i++) {
  result = result * i;
  console.log(`Giai thừa của ${i} là : ${result}`);
}
