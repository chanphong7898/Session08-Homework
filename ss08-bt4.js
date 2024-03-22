let a = +prompt("Mời nhập số a");
let b = +prompt("Mời nhập số b");
for (i = 1; i <= a; i++) {
  if (i % b === 0) {
    console.log(`${i}`);
  }
}
