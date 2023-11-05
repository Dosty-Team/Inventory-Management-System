const fs = require("fs");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let key = 1;

function generateDataForMonth(month, year) {
  const data = [];

  for (let day = 1; day <= 31; day++) {
    if (new Date(year, month - 1, day).getMonth() + 1 === month) {
      const productsSold = getRandomInt(3, 5);

      for (let product = 1; product <= productsSold; product++) {
        const productName = ["Smart Phone", "Laptop", "Tablet", "Headphones"][getRandomInt(0, 3)];
        const qtySold = getRandomInt(1, 10); // Vary quantity sold
        const cp = getRandomInt(400, 800);
        const sp = getRandomInt(900, 1000);
        const total = qtySold * sp;
        const date = `${year}/${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")} ${getRandomInt(8, 20).toString().padStart(2, "0")}:${getRandomInt(0, 59).toString().padStart(2, "0")}:00 PM`;

        data.push({
          key: key.toString(),
          productName,
          qtySold,
          total,
          date,
        });

        key++;
      }
    }
  }

  return data;
}

const allData = [];

for (let month = 1; month <= 12; month++) {
  allData.push(...generateDataForMonth(month, 2023));
}
fs.writeFileSync("./data.txt", JSON.stringify(allData));
// console.log(JSON.stringify(allData));
