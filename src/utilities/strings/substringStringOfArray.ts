const substringStringsOfArray = (array: string[], start: number, end?: number) => array.map((str) => str.substring(start, end || str.length));

export default substringStringsOfArray;
