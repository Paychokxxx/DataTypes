'use strict';

const countTypesInArray = (myArr) => {
  const counters = {};
  for (const element of myArr) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };
