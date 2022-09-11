const stringToArray = (string: string, separator: string): string[] => {
  
  //First we check if the string is NOT undefined to apply the string methods. Otherwise it would throw an error
  if (string) {
    return string.split(separator);
  }

  return [];
};

export default stringToArray;
