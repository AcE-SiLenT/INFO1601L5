let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));//true

arr.push(11);//adds item to the end

console.log(arr)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem = arr.pop();//removes last item

console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator


// let arr2 = [12, 33, 4, 5, -4, 8, 19, 25];
                
// //map() creates a new array from the elements of one without changing the old one
// function double(num){
//   return num * 2;
// }

// let doubledArr = ar2.map(double); 
// console.log(doubledArr);

// function isOdd(num){
//   return element%2 !== 0; 
// }
// //Filter takes a test condition and returns only the element which 
// //make the condition true
// let odds = arr2.filter(isOdd);
// console.log(odds);

// //Returns true or false if any of the elements of the array 
// //meets a specified condition
// function has5Factor(){
//   return ele % 5 === 0;
// }

// let hasFiveFactor = arr2.some(has5Factor);
// console.log(hasFiveFactor);

// function intCompare(a, b){
//  return a - b;
// }

// //sort function must return either 0, +ve, -ve
// let ascending = arr2.sort(intCompare)
// console.log(ascending);