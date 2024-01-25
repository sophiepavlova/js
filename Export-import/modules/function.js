const getValue = function (array, key) {
  const res = [];
  for (const person of array) {
    res.push(person[key]);
  }
  return res;
};

export default getValue;
