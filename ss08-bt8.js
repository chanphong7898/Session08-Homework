let number = +prompt("Mời nhập số");
if (!isNaN(number) && number > 0) {
  for (let i = 3; i < number; i++) {
    let isCheck = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isCheck = false;
      }
    }
    if (isCheck) {
      console.log(i);
    }
  }
}
