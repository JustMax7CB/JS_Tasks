const task2If = (num1, num2, num3) => {
  let product = num1 * num2 * num3;
  if (product < 0) alert("-");
  else alert("+");
};

const task3ForIf = (num1, num2, num3) => {
  let numArray = [num1, num2, num3];
  let firstBiggest = Math.max(...numArray);
  numArray = numArray.filter((num) => num !== firstBiggest);
  let secondBiggest = Math.max(...numArray);
  numArray = numArray.filter((num) => num !== secondBiggest);
  let thirdBiggest = numArray[0];
  alert(`${firstBiggest}, ${secondBiggest}, ${thirdBiggest}`);
};

const task4ForIf = (num1, num2, num3, num4, num5) => {
  let biggest = num1;
  for (let num of [num2, num3, num4, num5]) {
    if (num > biggest) biggest = num;
  }
  alert(biggest);
};

const task5For = () => {
  for (let i = 0; i < 15; i++) {
    if (i % 2 === 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
  }
};

const task7For = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
  }
};
