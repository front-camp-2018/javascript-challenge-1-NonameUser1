/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const sumOfElement = numb =>{
    const arr = numb.toString().split('').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum ;
  };
  let min;
  let buff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    for (let j = i + 1;  j < arr.length; j++) {
      if (sumOfElement(min) > sumOfElement(arr[j])){
        min = arr[j];
        buff = arr[j];
        arr[j] = arr[i];
        arr[i] = buff;
      }
    }
  }
  return arr;
};


