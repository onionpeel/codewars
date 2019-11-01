const getSize = (width, height, depth) => {
  const volume = width * height * depth;
  const area = (2 * height * width) + (2 * height * depth) + (2 * depth * width);
  return [area, volume];
};

console.log(getSize(10,10,10));
