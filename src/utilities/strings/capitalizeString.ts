const capitalizeString = (string: string) => {

  //First we check if the string is NOT undefined to apply the string methods. Otherwise it would throw an error
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
};

export default capitalizeString;