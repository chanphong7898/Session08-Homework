let number = +prompt("Mời nhập số:");

if (!isNaN(number) && number > 0) {
  let sum = 1;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    console.log(`${number} là số hoàn hảo`);
  } else {
    console.log(`${number} không phải là số hoàn hảo`);
  }
}
