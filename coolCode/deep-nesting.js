const retrieveFinalValue = element => {
  if (Array.isArray(element)) {
    return retrieveFinalValue(element[0]);
  };
  console.log(element);
};

const arr = [[[[['hi']]]]];
retrieveFinalValue(arr);
