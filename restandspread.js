function sum(a,b=5,c){
    return a+b+c;
}
console.log(' default values ',sum(1,undefined,5));
console.log(' default values ',sum(1,0,5));

function summ(...params)
{
    return params.reduce((acc,num) => acc+=num);
}

console.log('rest parameters ', summ(5,8,9));
console.log('rest parameters ', summ(5,8,9,6,7));


function summm(a,b,c)
{
    return a+b+c;
}
let args = [2,6,4,8]
console.log('spread parameter ', summm(...args));