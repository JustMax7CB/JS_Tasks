const task3 = () => {
  const string_to_array = (string) => {
    return string.split(" ");
  };
  console.log(string_to_array("Robin Singh"));
};

const task15 = () => {
  const humanize_format = (number) => {
    if (typeof number !== "number") return;
    if (number % 10 === 1) return `${number}st`;
    else if (number % 10 === 2) return `${number}nd`;
    else if (number % 10 === 3) return `${number}rd`;
    else return `${number}th`;
  };
  console.log(humanize_format());
  console.log(humanize_format(1));
  console.log(humanize_format(8));
  console.log(humanize_format(301));
  console.log(humanize_format(402));
};

const task17String = () => {
  const string_chop = (string, num) => {
    let arr = [];
    if (num === undefined) return [string];
    else {
      let index = 0;
      let cut = "";
      while (index < string.length) {
        for (let j = 0; j < num; j++) {
          if (index >= string.length) break;
          cut += string[index++];
        }
        arr.push(cut);
        cut = "";
      }
    }
    return arr;
  };

  console.log(string_chop("w3resource"));
  console.log(string_chop("w3resource", 2));
  console.log(string_chop("w3resource", 3));
};

const task21String = () => {
  const repeat_string = (string, count) => {
    let result = "";
    if (count === undefined) return "Error in string or count";
    else {
      for (let i = 0; i < count; i++) result += string;
    }
    return result;
  };

  console.log(repeat_string("a", 4));
  console.log(repeat_string("a"));
};

const task24String = () => {
  const truncate = (string, count) => {
    let result = "";
    let numOfWords = 0;
    let lastIndex = 0;
    for (let i = 0; i < string.length && numOfWords !== count; i++) {
      if (string[lastIndex++] === " ") numOfWords++;
    }
    result = string.slice(0, lastIndex);
    return result;
  };
  console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
};
