let fetch  = require('cross-fetch');

function getdata()
{
    let promise =  new Promise((resolve,reject) => {
     console.log('start fetch data');
    fetch('https://api.github1.com/users/lquixada')
    .then(res => {
        return res.json();
    })
    .then(user => {
        resolve(user);
    })
    .catch(err => reject(err));
    })
   
    return promise;
}

console.log('call mydata function');
getdata()
.then (res => 
    {
        console.log('promise sample');
        console.log('promise data',res);
    })
    .catch(err => {
        console.log('promise error' , err);
    })

console.log('after callback method');