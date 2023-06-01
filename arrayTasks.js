// Array Tasks

const task10 = () => {
    // Printing 2d array
    const arr = [
      [1, 2, 1, 24],
      [8, 11, 9, 4],
      [7, 0, 7, 27],
      [7, 4, 28, 14],
      [3, 10, 26, 7],
    ];
    for (let row = 0; row < arr.length; row++) {
      console.log(`Row ${row}`);
  
      for (let num = 0; num < arr[row].length; num++) {
        console.log(arr[row][num]);
      }
    }
  };
  
  const task19 = () => {
    // sum of two arrays
    let array1 = [1, 0, 2, 3, 4];
    let array2 = [3, 5, 6, 7, 8, 13];
  
    console.log(`Array 1: ${array1}`);
    console.log(`Array 2: ${array2}`);
  
    if (array1.length > array2.length) {
      for (let num = 0; num < array2.length; num++) {
        array1[num] += array2[num];
      }
      console.log(`Array 1: ${array1}`);
    } else if (array2.length > array1.length) {
      for (let num = 0; num < array1.length; num++) {
        array2[num] += array1[num];
      }
      console.log(`Array 2: ${array2}`);
    } else {
      for (let num = 0; num < array2.length; num++) {
        array1[num] += array2[num];
      }
      console.log(`Array 1: ${array1}`);
    }
  };
  
  const task24 = () => {
    // Remove null/0/""/false/undefined/Nan values from array
    let array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
    let resultArray = [];
    console.log(`Array: ${array}`);
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        resultArray.push(array[i]);
      }
    }
    console.log(`Array: ${resultArray}`);
  };
  
  const task30 = () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 30, 1];
  
    const mergeArray = (arr1, arr2) => {
      for (let i = 0; i < arr1.length; i++) {
        if (!(arr1[i] in arr2)) {
          arr2.push(arr1[i]);
        }
      }
      console.log(arr2);
    };
  
    mergeArray(array1, array2);
  };
  
  const task32 = () => {
    const arr = [2, 5, 9, 6];
  
    const contains = (arr, element) => {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === element) return true;
      }
      return false;
    }
    console.log(contains(arr, 5));
  };
  