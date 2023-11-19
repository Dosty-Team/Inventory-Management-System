function calculate(x, y) {
  let size = 3;
  let sumx = 0, sumy = 0, sumxy = 0, sumx2 = 0, a, b;

  for (let i = 0; i < size; i++) {
    sumx += x[i];
    sumy += y[i];
    sumxy += x[i] * y[i];
    sumx2 += x[i] * x[i];
  }

  b = (size* sumxy - sumx * sumy) / (size* sumx2 - sumx * sumx);
  a = sumy / size - b * (sumx / size);

  console.log(`The required fit line is: y = ${a} + ${b}x`);
}
calculate([1, 2, 3], [10, 20, 30]);
