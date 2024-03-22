let number = +prompt("Mời nhập số:");

if (!isNaN(number) && number > 0) {
  let f0 = 0;
  let f1 = 1;
  let sum = 1;
  let fibonacci = `${f0} ${f1} `;

  for (let i = 1; i < number; i++) {
    let fn = f0 + f1;
    f0 = f1;
    f1 = fn;
    sum += fn;
    if (sum >= number) {
      break;
    }
    fibonacci += `${fn} `;
  }
  console.log(fibonacci);
}
