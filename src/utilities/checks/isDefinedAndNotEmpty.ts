const isDefinedAndNotEmpty = (variable: string | Array<unknown>) => {
  return variable && variable?.length !== 0;
};

export default isDefinedAndNotEmpty;