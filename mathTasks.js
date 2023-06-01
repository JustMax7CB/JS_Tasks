// Math Tasks

const task2 = () => {
  const bin_to_dec = (binaryString) => {
    let decimalResult = 0;
    let power = binaryString.length - 1;
    for (let i = 0; i < binaryString.length; i++) {
      if (binaryString[i] === "1") decimalResult += Math.pow(2, power);
      power--;
    }
    return decimalResult;
  };

  console.log(bin_to_dec("110011"));
  console.log(bin_to_dec("100"));
};

const task7 = () => {
  const min = (arr) => {
    return Math.min(...arr);
  };
  console.log(min([12, 34, 56, 1]));
  console.log(min([-12, -34, 0, -56, -1]));
};

const task13 = () => {
  const power_of_2 = (num) => {
    let power = 1;
    while (2 ** power <= num) {
      if (2 ** power === num) return true;
      else power++;
    }
    return false;
  };

  console.log(power_of_2(16));
  console.log(power_of_2(18));
  console.log(power_of_2(256));
};

const task17Math = () => {
  const sum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        result += arr[i];
      }
    }
    return result;
  };

  console.log(sum([1, 2, 3]));
  console.log(sum([100, -200, 3]));
  console.log(sum([1, 2, "a", 3]));
};

const task34 = () => {
  const radians_to_degrees = (radians) => {
    return radians * (180 / Math.PI);
  };
  console.log(radians_to_degrees(0.7853981633974483));
};
