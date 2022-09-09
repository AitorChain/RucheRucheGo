const substringStringsOfArray = (array: string[], start: number, end?: number) => {
  return array.map((str) => {
    return str.substring(start, end || str.length);
  });
};

export default substringStringsOfArray;
