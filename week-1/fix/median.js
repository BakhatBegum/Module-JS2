//Fix this implementation
//Start by running the tests for this function
//If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

//calculateMedian( 3, 3, 4, 5)
//module.exports = calculateMedian;

// console.log(calculateMedian( 3, 3, 4, 5))


