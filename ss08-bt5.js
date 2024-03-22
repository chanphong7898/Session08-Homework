let result = 10;
let loop = true;
while (loop) {
  let n = +prompt("Input number");
  if (n === result) {
    console.log("Bingo");
    break;
  } else if (n < result) {
    console.log("Too small");
  } else {
    console.log("Too big");
  }
}
