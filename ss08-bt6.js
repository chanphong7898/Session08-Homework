for (let i = 1; i <= 3; i++) {
  console.log("-----------------------");
  for (let j = 1; j <= 10; j++) {
    if (i === 3 && j === 2) {
      break;
    } else {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}
