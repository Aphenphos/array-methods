// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce(function(acc, item) {
    if (!item[brands.brand]) {
      return acc;
    }
    acc.push(item[brands.brand]);
    return acc;
  }, brands.brand);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {};
