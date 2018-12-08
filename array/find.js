/* let nums = [10,20,30,40];
console.log(nums);
let result = nums.find( num => num >20);

console.log(result); */
/** filter / find example */
let employees = [{
    id:1,
    name:'arun',
    dept:'IT'
},{
    id:2,
    name:'rahul',
    dept:'accounts'
},{
    id:3,
    name:'amit',
    dept:'IT'
}];

let result = employees.find( emp => emp.dept === 'IT');
console.log(result);
let resultFilter = employees.filter( emp => emp.dept === 'IT');
console.log(resultFilter);