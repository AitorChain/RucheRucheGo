import capitalizeString from './capitalizeString';

const substringStringsOfArray = (array: string[], start: number, end?: number) => {
  return array.map((str) => {
    const newStr = str.substring(start, end || str.length);
    return capitalizeString(newStr);
  });
};

export default substringStringsOfArray;
