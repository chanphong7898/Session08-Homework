let number = +prompt("Mời nhập số:");

let print = "";
for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    print += "*";
  }
  console.log(print);
  print = "";
}

let i;
let j;
for (i = 1; i <= number; i++) {
  for (j = 1; j <= number - i; j++) {
    print += " ";
  }
  for (j = 1; j <= i; j++) {
    print += "*";
  }
  console.log(print);
  print = "";
}
