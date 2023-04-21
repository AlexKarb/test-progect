export const sliceArrayIfMoreThan = (array, numberOfMoreThan) => {
  const slicingLebels = array.slice(array.length - numberOfMoreThan);

  return array.length > numberOfMoreThan ? slicingLebels : array;
};
