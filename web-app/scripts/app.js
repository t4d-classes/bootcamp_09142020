

// immutable variables
// const t = 2;

// error
// t = 6;

// mutable variables
// let s = 7;

// s = 3;

// const nums = [1,2,3,4];

// const doubleNums = [];

/* you specified the how */
// for (let x=0; x< nums.length; x++) {
//   doubleNums.push(nums[x] * 2 /* what */);
// }

// const doubleNums = nums.map(n => n * 2 /* what */);

// console.log(nums);
// console.log(doubleNums);

function addColor() {
  const colorName = document.querySelector('[name=colorName]').value;
  const colorListItem = document.createElement('li');
  colorListItem.textContent = colorName;
  document.querySelector('.color-list').appendChild(colorListItem);
}