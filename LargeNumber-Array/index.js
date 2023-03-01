/** @format */


// function largestOfFour(arr) {
//   const results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//     }
//     results[i] = largestNumber;
//   }

//   return results;
// }

// function largestOfFour(arr) {
//   return arr.map(function (group) {
//     return group.reduce(function (prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null));
// }

// function largestOfFour(arr, finalArr = []) {
//   return !arr.length
//     ? finalArr
//     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
// }

function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let singleArr = arr[i];
    let highestValue = singleArr[0];
    for (let j = 0; j < singleArr.length; j++) {
      if (singleArr[j] > highestValue) {
        highestValue = singleArr[j];
      }
    }
    result.push(highestValue);
  }
  return result;
}
console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]));

