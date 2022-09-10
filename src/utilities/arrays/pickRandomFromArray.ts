function pickRandomFromArray<T>(array: T[]) {
  const result = array[Math.floor(Math.random() * array.length)];

  return result;
}

export default pickRandomFromArray;
