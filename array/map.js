let nums =[2,6,4,5,7,3,8]
let result = nums.map( num => num + 5);
console.log(result);
let result1 = nums.map((num,index) => {
return (num % 2) ===0 ? num *2 : num;
})
console.log('double even numbers',result1);

// reduce
let resultReduce = nums.reduce((acc,cur) => {
   return acc += cur;

},5);
console.log(resultReduce);
let morenums = [2,6,3,4];
console.log(nums.every((num => num >=2)));
console.log(nums.some((num => num >=2)));