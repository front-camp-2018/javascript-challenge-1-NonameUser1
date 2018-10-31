/* eslint-disable-next-line */
export const doubleNum = num => {
  const isMirror = str =>{
    const halfLength = str.length / 2;
    const first = str.slice(0 , halfLength);
    const second = str.slice(halfLength , str.length);
    return first === second ? true : false;
  };

  const stringNum = num.toString();

  if (stringNum.length % 2 === 0 && isMirror(stringNum)){
    return num;
  } else {
    return num * 2;
  }

};
